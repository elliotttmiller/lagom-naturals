$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

Write-Host "`nLagom Naturals production build" -ForegroundColor Cyan
Write-Host "`nChecking generated responsive image sources..." -ForegroundColor DarkGray
& npm run images:check
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`nBuilding GitHub Pages production output..." -ForegroundColor DarkGray
& npm run build:pages
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`nProduction build completed." -ForegroundColor Green
