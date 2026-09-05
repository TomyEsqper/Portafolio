# AWS Static Deploy

This portfolio is an Angular application intended to be deployed as a static site on AWS.

## Architecture

- `Angular build` generates the production files.
- `Amazon S3` stores the compiled site.
- `Amazon CloudFront` serves the site over HTTPS and handles SPA routing.
- Optional: `ACM + Route 53` for a custom domain.

## Build Output

The deployable output for this project is:

```text
dist/portafolio/browser
```

Build it with:

```bash
npm run build:prod
```

## Infrastructure

The repository includes a CloudFormation template at `infra/aws/portfolio-static-site.yaml`.

It provisions:

- A private S3 bucket for the Angular build
- A CloudFront Origin Access Control
- A CloudFront distribution
- SPA-friendly `403` and `404` fallbacks to `/index.html`

## Deploy Steps

1. Create the infrastructure stack:

```bash
aws cloudformation deploy \
  --stack-name portfolio-static-site \
  --template-file infra/aws/portfolio-static-site.yaml \
  --parameter-overrides SiteBucketName=<unique-bucket-name> \
  --capabilities CAPABILITY_NAMED_IAM
```

2. Build the Angular application:

```bash
npm run build:prod
```

3. Upload the site to S3 and optionally invalidate CloudFront:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-aws.ps1 `
  -BucketName <unique-bucket-name> `
  -DistributionId <cloudfront-distribution-id>
```

## Custom Domain

If you want a custom domain:

1. Request an ACM certificate in `us-east-1`
2. Pass `AcmCertificateArn` and `DomainName` to the CloudFormation template
3. Point the DNS record to CloudFront, preferably through Route 53

## SPA Routing

Angular uses client-side routing patterns, so CloudFront must return `index.html` for missing routes. This is already configured in the template through:

- `403 -> /index.html`
- `404 -> /index.html`

## Cache Invalidation

After each deploy, invalidate CloudFront to refresh cached files:

```bash
aws cloudfront create-invalidation --distribution-id <id> --paths "/*"
```

The PowerShell deploy script does this automatically when `-DistributionId` is provided.

## Why This Setup

This setup is a strong fit for the current portfolio because:

- it is low cost,
- it is easy to explain in interviews,
- it keeps the frontend architecture clean,
- and it leaves room for a future `.NET Lambda` API without reworking the frontend hosting.
