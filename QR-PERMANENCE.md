# Permanencia del QR de TB Gracias

## Destino público permanente

El código QR impreso y distribuido para este proyecto dirige exactamente a:

`https://carlosmvks1.github.io/tb-gracias/`

Esta URL se considera una interfaz pública permanente del proyecto.

## Reglas de mantenimiento

No se debe:

- renombrar el repositorio `tb-gracias`;
- cambiar el propietario de la URL sin mantener compatibilidad;
- desactivar GitHub Pages;
- eliminar o mover `index.html` de forma que la URL raíz deje de resolver;
- sustituir la URL raíz por otra dirección sin conservar esta como entrada funcional.

Sí se puede:

- actualizar el contenido y el diseño;
- reorganizar CSS, JavaScript e imágenes;
- agregar nuevas páginas;
- mejorar accesibilidad, fuentes y navegación;
- reconstruir técnicamente el sitio, siempre que la URL pública anterior siga funcionando.

## Rutas que deben mantenerse

Además de la raíz, el proyecto mantiene estas rutas públicas actuales:

- `/sintomas.html`
- `/prevencion.html`
- `/tratamiento.html`
- `/conocer.html`
- `/preguntas.html`
- `/fuentes.html`

La navegación también conserva compatibilidad con fragmentos históricos definidos en `assets/navigation.js`.

## Verificación

El flujo de GitHub Actions `.github/workflows/qr-integrity.yml` comprueba en cada Pull Request y cada cambio a `main` que la entrada principal y las rutas esenciales sigan presentes.
