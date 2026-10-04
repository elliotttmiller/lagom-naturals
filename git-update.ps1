param(
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string[]]$Path,

    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$CommitMessage,

    [switch]$Push
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

function Assert-GitCommand {
    param([string]$Message)
    if ($LASTEXITCODE -ne 0) { throw $Message }
}

$mergeHead = git rev-parse --git-path MERGE_HEAD
Assert-GitCommand 'Unable to inspect Git merge state.'
$gitDir = git rev-parse --absolute-git-dir
Assert-GitCommand 'Unable to inspect Git directory.'
foreach ($operation in @('MERGE_HEAD', 'CHERRY_PICK_HEAD', 'REVERT_HEAD', 'rebase-merge', 'rebase-apply')) {
    if (Test-Path -LiteralPath (Join-Path $gitDir $operation)) {
        throw "Git operation '$operation' is in progress. Finish it before creating a checkpoint."
    }
}

git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    throw 'The index already contains staged changes. Review and commit those changes separately before using this script.'
}

git add -- $Path
Assert-GitCommand 'Unable to stage the explicitly listed paths.'

git diff --cached --check
Assert-GitCommand 'Staged changes contain whitespace errors. Review them before committing.'

git diff --cached --stat
git commit -m $CommitMessage
Assert-GitCommand 'Commit failed. No push was attempted.'

if ($Push) {
    git push
    Assert-GitCommand 'Commit succeeded, but the normal push failed.'
}
