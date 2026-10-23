# TB Gracias

Material educativo de Salud Pública IV, UNAH, 2026. Información sobre tuberculosis para la estrategia de intervención en Gracias, Lempira.

Sitio: https://carlosmvks1.github.io/tb-gracias/

La pestaña y la identidad al compartir enlaces usan “Tuberculosis: Guía”. Todas las páginas incluyen favicon SVG/ICO/PNG, icono para iOS, URL canónica y metadatos Open Graph y Twitter con una imagen de presentación de 1200 × 630 en `assets/brand/`. No dependen de JavaScript para que los lectores de enlaces los detecten.

Página estática sin dependencias de compilación. GitHub Pages publica `index.html` desde la raíz de `main`. Se conserva `.nojekyll`; todas las rutas de recursos son relativas para funcionar bajo `/tb-gracias/`.

La guía se organiza en páginas estáticas independientes: portada (index.html), síntomas y atención (sintomas.html), prevención (prevencion.html), tratamiento (tratamiento.html), información sobre TB (conocer.html), preguntas (preguntas.html) y fuentes (fuentes.html).

Cada página comparte menú principal, ruta de navegación y créditos del Grupo 4: Carlos Murillo, Eduardo Flores, Jonatán Suazo y Hugo Ramírez. Datos proporcionados por el usuario para este proyecto de Salud Pública IV, UNAH, Gracias, Lempira.

La navegación utiliza enlaces HTML reales. El menú móvil y las respuestas usan controles nativos; funcionan sin JavaScript. assets/navigation.js mejora la apertura de referencias y mantiene enlaces antiguos con fragmentos. assets/pages.css define la jerarquía entre portada y páginas de lectura.

Los estilos previos siguen en assets/styles.css, assets/editorial.css y assets/hierarchy.css. Las ilustraciones de síntomas proceden de Health Icons (CC0); ver assets/img/healthicons/CREDITS.md. Las flechas son SVG para evitar su conversión a emojis en iOS.

El contenido educativo fue revisado y precisado el 22 de octubre de 2026 contra SESAL, OMS, CDC y NHS. Cada bloque clínico incluye referencias consultables. Ver [registro de revisión](docs/REVISION-DE-CONTENIDO.md). La revisión es documental, no una certificación clínica.

Las imágenes están alojadas en `assets/img/` y sus fuentes y condiciones se documentan en `assets/img/CREDITS.md`, con créditos visibles en la página.

Para previsualizar, servir la raíz con cualquier servidor HTTP estático. Revisar en escritorio y móvil, navegación por teclado, enlaces internos e imágenes antes de publicar.
