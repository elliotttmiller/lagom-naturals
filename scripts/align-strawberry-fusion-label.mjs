import sharp from 'sharp';
import { resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';

const outputDirectory = resolve('src/assets/seltzers');
const masterPath = resolve(outputDirectory, 'strawberry-lime-label-889.webp');
const fusionBounds = { left: 590, top: 800, width: 70, height: 320 };
const verticalShift = -120;

const { data, info } = await sharp(masterPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const raw = Buffer.from(data);
const fusionPixels = await sharp(raw, { raw: { width: info.width, height: info.height, channels: 4 } })
  .extract(fusionBounds)
  .png()
  .toBuffer();

// The artwork in this rectangle is only the FUSION word; retain every other label pixel.
for (let y = fusionBounds.top; y < fusionBounds.top + fusionBounds.height; y += 1) {
  for (let x = fusionBounds.left; x < fusionBounds.left + fusionBounds.width; x += 1) {
    raw[(y * info.width + x) * 4 + 3] = 0;
  }
}

const alignedMaster = await sharp(raw, { raw: { width: info.width, height: info.height, channels: 4 } })
  .composite([{ input: fusionPixels, left: fusionBounds.left, top: fusionBounds.top + verticalShift }])
  .png()
  .toBuffer();

for (const width of [480, 889]) {
  const image = sharp(alignedMaster).resize({ width, withoutEnlargement: true }).toColorspace('srgb');
  const [webp, avif] = await Promise.all([
    image.clone().webp({ quality: 88, alphaQuality: 100, effort: 6, smartSubsample: true }).toBuffer(),
    image.clone().avif({ quality: 62, effort: 6, chromaSubsampling: '4:4:4' }).toBuffer(),
  ]);
  await Promise.all([
    writeFile(resolve(outputDirectory, `strawberry-lime-label-aligned-${width}.webp`), webp),
    writeFile(resolve(outputDirectory, `strawberry-lime-label-aligned-${width}.avif`), avif),
  ]);
}

console.log(`Moved FUSION up ${Math.abs(verticalShift)}px.`);
