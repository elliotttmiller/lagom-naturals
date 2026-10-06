$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$syncBranch = 'main'
$currentBranch = (& git branch --show-current).Trim()
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
if ($currentBranch -ne $syncBranch) {
    Write-Host "Sync stopped: switch to '$syncBranch' first (current branch: '$currentBranch')." -ForegroundColor Yellow
    exit 1
}

Write-Host "Fetching origin/$syncBranch..." -ForegroundColor Cyan
& git fetch origin "refs/heads/${syncBranch}:refs/remotes/origin/${syncBranch}"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Merging origin/$syncBranch and preserving tracked local edits..." -ForegroundColor Cyan
& git merge --no-edit --autostash "origin/$syncBranch"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Sync paused. Resolve the reported conflicts; Git retains local and remote revisions." -ForegroundColor Yellow
    exit $LASTEXITCODE
}

Write-Host "Sync completed." -ForegroundColor Green
