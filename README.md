# Tomás Esquivel — Portfolio

Portfolio personal en Angular 19 para presentar perfil backend `.NET`, proyectos, stack, certificaciones y reconocimientos.

**Live:** [https://d10dom7d35m0q6.cloudfront.net](https://d10dom7d35m0q6.cloudfront.net)

## Stack

- Angular 19 + TypeScript + SCSS
- i18n ES/EN con signals
- AWS: S3 + CloudFront
- CI/CD: GitHub Actions

## Desarrollo local

```bash
npm install
npm start
```

App en `http://localhost:4200/`.

```bash
npm run build:prod   # salida en dist/portafolio/browser
npm test
```

## Arquitectura de despliegue

En el sitio hay una sección **Arquitectura** que explica esto mismo para entrevistas y demos.

```text
Angular build → S3 → CloudFront
PR → CI (build/test)
merge a main → CD (deploy automático)
```

- Infra: `infra/aws/portfolio-static-site.yaml`
- Guía AWS: `docs/aws-static-deploy.md`
- Workflows: `.github/workflows/`

El frontend es estático. Lambda no se usa aquí porque no aporta valor al sitio actual; si más adelante se agrega backend, iría como API separada (por ejemplo `.NET` en Lambda).

## Flujo de trabajo

GitHub Flow:

1. rama `feature/...`
2. Pull Request
3. CI en verde
4. merge a `main`
5. deploy automático a AWS
