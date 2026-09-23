import { cp, mkdir, rename, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const crmRoot = resolve(here, '..');
const apiDir = resolve(crmRoot, 'app', 'api');
const apiHold = resolve(crmRoot, '.pages-api-disabled');
const exportDir = resolve(crmRoot, 'out');
const pagesTarget = resolve(crmRoot, '..', '..', 'docs', 'crm');

let apiMoved = false;

try {
  await rm(apiHold, { recursive: true, force: true });
  try {
    await rename(apiDir, apiHold);
    apiMoved = true;
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }

  const result = spawnSync(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['next', 'build'],
    {
      cwd: crmRoot,
      stdio: 'inherit',
      env: {
        ...process.env,
        GITHUB_PAGES: 'true',
        GITHUB_PAGES_BASE_PATH: process.env.GITHUB_PAGES_BASE_PATH || '/lagom-naturals/crm',
      },
    },
  );

  if (result.status !== 0) {
    throw new Error(`CRM static export failed with exit code ${result.status ?? 'unknown'}`);
  }

  await rm(pagesTarget, { recursive: true, force: true });
  await mkdir(pagesTarget, { recursive: true });
  await cp(exportDir, pagesTarget, { recursive: true });
  console.log(`CRM GitHub Pages preview copied to ${pagesTarget}`);
} finally {
  if (apiMoved) {
    await rm(apiDir, { recursive: true, force: true });
    await rename(apiHold, apiDir);
  }
}
