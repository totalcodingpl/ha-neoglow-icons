param (
    [Parameter(Mandatory=$true)]
    [string]$Version
)

# Normalize version (remove leading 'v' if present)
$cleanVersion = $Version -replace '^v', ''

Write-Host "🚀 Starting version bump to v$cleanVersion..." -ForegroundColor Cyan

# 1. Update version in README.md
$readmePath = "README.md"
if (Test-Path $readmePath) {
    $content = Get-Content $readmePath -Raw
    # Replace the badge URL e.g. Version-1.0.3-blue.svg
    $content = $content -replace 'Version-\d+\.\d+\.\d+-blue\.svg', "Version-$cleanVersion-blue.svg"
    Set-Content $readmePath $content -NoNewline
    Write-Host "✅ Updated README.md version badge." -ForegroundColor Green
} else {
    Write-Warning "README.md not found!"
    exit 1
}

# 2. Stage changes
git add README.md hacs.json assets/
Write-Host "✅ Staged changes." -ForegroundColor Green

# 3. Commit
$commitMsg = "Bump version to v$cleanVersion"
git commit -m $commitMsg
Write-Host "✅ Committed: $commitMsg" -ForegroundColor Green

# 4. Push to remote
Write-Host "📤 Pushing to master branch..." -ForegroundColor Cyan
git push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to push to GitHub!"
    exit 1
}
Write-Host "✅ Pushed to master successfully." -ForegroundColor Green

# 5. Create GitHub Release
Write-Host "📦 Creating GitHub Release v$cleanVersion..." -ForegroundColor Cyan
gh release create "v$cleanVersion" dist/ha-neoglow-icons.js dist/ha-neoglow-icons.css dist/ha-neoglow-icons.json --title "v$cleanVersion" --notes "NeoGlow Icons release v$cleanVersion"
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to create GitHub release!"
    exit 1
}
Write-Host "🎉 Version bump and release v$cleanVersion completed successfully!" -ForegroundColor Green
