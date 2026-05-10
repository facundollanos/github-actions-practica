# Proyecto de práctica - GitHub Actions

## Estructura

```
.github/
└── workflows/
    ├── 01-ci-basico.yml              → push/PR, checkout, install, test
    ├── 02-variables-y-secretos.yml   → env vars, secrets, vars predefinidas
    ├── 03-jobs-paralelos-y-dep.yml   → jobs en paralelo, needs, artefactos
    ├── 04-matriz.yml                 → matrix builds, múltiples OS/versiones
    └── 05-manual-y-scheduled.yml     → workflow_dispatch, cron, inputs
```

## Cómo usarlo

1. Crear un repo en GitHub
2. Subir este proyecto
3. Ir a la pestaña "Actions" para ver los workflows
4. Para el workflow manual: Actions → "Manual y Programado" → Run workflow

## Para configurar secretos

GitHub → Settings → Secrets and variables → Actions → New repository secret
