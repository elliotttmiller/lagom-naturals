import sharp from 'sharp';
import { resolve } from 'node:path';

const outputDirectory = resolve('src/assets/seltzers');
const potencyTarget = { x: 330, y: 1472, width: 237, height: 38 };
const potencyStartY = 1300;
const assets = [
  ['24k-lemonade-label', 'src/assets/products/24k-lemonade.webp', [273, 1554, 255, 41]],
  ['blackberry-breeze-label', 'src/assets/products/blackberry-breeze.webp', [279, 1591, 256, 41]],
  ['strawberry-lime-label', 'src/assets/products/strawberry-lime-fusion.webp', [259, 1619, 280, 43]],
  ['watermelon-label', 'src/assets/products/watermelon-refresher.webp', [286, 1560, 252, 40]],
];

async function extractPotencyInk(source, [left, top, width, height]) {
  const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const masked = Buffer.from(data);

  for (let index = 0; index < masked.length; index += 4) {
    const red = masked[index];
    const green = masked[index + 1];
    const blue = masked[index + 2];
    const alpha = masked[index + 3];
    const maximum = Math.max(red, green, blue);
    const saturation = maximum ? (maximum - Math.min(red, green, blue)) / maximum : 0;

    if (!(alpha > 16 && maximum > 70 && saturation > 0.18)) masked[index + 3] = 0;
  }

  return sharp(masked, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left, top, width, height })
    .resize({ width: potencyTarget.width, height: potencyTarget.height, fit: 'fill' })
    .png()
    .toBuffer();
}

for (const [name, source, sourceBounds] of assets) {
  const masterPath = resolve(outputDirectory, `${name}-889.webp`);
  const { data, info } = await sharp(masterPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const flavorLayer = Buffer.from(data);

  // Flavor artwork ends above this line; clear and replace potency only.
  for (let y = potencyStartY; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) flavorLayer[(y * info.width + x) * 4 + 3] = 0;
  }

  const centeredLayer = await sharp(flavorLayer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .composite([{ input: await extractPotencyInk(source, sourceBounds), left: potencyTarget.x, top: potencyTarget.y }])
    .png()
    .toBuffer();

  for (const width of [480, 889]) {
    const image = sharp(centeredLayer).resize({ width, withoutEnlargement: true }).toColorspace('srgb');
    await Promise.all([
      image.clone().webp({ quality: 88, alphaQuality: 100, effort: 6, smartSubsample: true }).toFile(resolve(outputDirectory, `${name}-${width}.webp`)),
      image.clone().avif({ quality: 62, effort: 6, chromaSubsampling: '4:4:4' }).toFile(resolve(outputDirectory, `${name}-${width}.avif`)),
    ]);
  }
}

console.log(`Centered potency layers at ${potencyTarget.x}, ${potencyTarget.y}.`);
