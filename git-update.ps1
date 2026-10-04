$ErrorActionPreference = 'Stop'

$commitMessage = Read-Host 'Commit message (leave blank for Update checkpoint)'
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = 'Update checkpoint'
}

git add .
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git commit -m $commitMessage
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git push
exit $LASTEXITCODE
