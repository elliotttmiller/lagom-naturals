$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

Write-Host "`nLagom Naturals production build" -ForegroundColor Cyan
Write-Host "Auditing source media..." -ForegroundColor DarkGray
& npm run audit:assets
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`nBuilding GitHub Pages production output..." -ForegroundColor DarkGray
& npm run build:pages
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`nProduction build and quality audit completed." -ForegroundColor Green
