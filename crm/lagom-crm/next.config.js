/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const pagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || '/lagom-naturals/crm';

const nextConfig = {
  ...(isGithubPages ? {
    output: 'export',
    basePath: pagesBasePath,
    assetPrefix: pagesBasePath,
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
  env: {
    NEXT_PUBLIC_STATIC_PREVIEW: isGithubPages ? 'true' : 'false',
    NEXT_PUBLIC_APP_BASE_PATH: isGithubPages ? pagesBasePath : '',
  },
};

module.exports = nextConfig;
