$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

Write-Host "`nLagom Naturals production build" -ForegroundColor Cyan
Write-Host "`nBuilding GitHub Pages production output..." -ForegroundColor DarkGray
& npm run build:pages
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`nProduction build completed." -ForegroundColor Green
