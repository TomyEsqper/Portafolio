param(
    [Parameter(Mandatory = $true)]
    [string]$BucketName,

    [string]$DistributionId,

    [string]$BuildPath = "dist/portafolio/browser"
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
    throw "AWS CLI is not installed or is not available in PATH."
}

if (-not (Test-Path $BuildPath)) {
    throw "Build path '$BuildPath' does not exist. Run 'npm run build' first."
}

Write-Host "Syncing Angular build from '$BuildPath' to s3://$BucketName ..."
aws s3 sync $BuildPath "s3://$BucketName" --delete

if ($DistributionId) {
    Write-Host "Creating CloudFront invalidation for distribution '$DistributionId' ..."
    aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*"
}
else {
    Write-Host "Skipping CloudFront invalidation because no distribution ID was provided."
}

Write-Host "Deploy completed."
