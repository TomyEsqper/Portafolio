# Reconocimientos Design

## Goal
Agregar una seccion independiente de `Reconocimientos` para separar premios/logros de las certificaciones formales y permitir mostrar una lista con vista previa visual del item seleccionado.

## Placement
La seccion ira en `home` despues de `Certificaciones` y antes de `Stack`. Esto mantiene el flujo narrativo:
presentacion, certificaciones, reconocimientos, stack, proyectos, experiencia, formacion y contacto.

## UX
La seccion usara un layout de dos columnas en desktop:
- izquierda: lista de reconocimientos
- derecha: preview grande del reconocimiento activo

En movil se apilara en una sola columna, dejando la lista arriba y la preview abajo.

El primer reconocimiento vendra seleccionado por defecto. Al hacer clic en otro elemento, la preview cambiara sin navegar a otra ruta.

## Data Model
Se creara una fuente de datos separada, por ejemplo `src/app/data/recognitions.ts`, para no mezclar reconocimientos con `certifications.ts`.

Cada reconocimiento tendra:
- `id`
- `title`
- `issuer`
- `date`
- `description`
- `image`
- `kind` opcional para diferenciar premio, reconocimiento o evento

## Initial Content
La primera version incluira:
- `Programaton` asociado a `CUN`
- reconocimiento de `SENA` con imagen suministrada

La seccion debe aceptar items con o sin imagen. Si falta la imagen, se mostrara un placeholder editorial sobrio en el panel de preview.

## Components
Se agregara una seccion nueva y autocontenida, siguiendo el patron actual del proyecto:
- componente de seccion para renderizar lista + preview
- archivo de datos independiente
- estilos propios con el mismo lenguaje visual editorial del sitio

## Interaction
La lista de la izquierda mostrara metadatos cortos y una breve descripcion.
La preview de la derecha mostrara:
- imagen del reconocimiento
- titulo
- institucion
- fecha

El cambio de seleccion debe ser inmediato y accesible, con estado visible para el elemento activo.

## Accessibility
La lista debe ser navegable por teclado.
La imagen de preview debe usar texto alternativo descriptivo.
La jerarquia visual debe seguir los patrones ya existentes en `Experience`, `Education` y `Certifications`.

## Internationalization
La nueva seccion debe integrarse al sistema ES/EN ya agregado:
- etiquetas UI traducidas
- textos descriptivos localizados
- datos de reconocimientos localizados si aplica

## Verification
Antes de cerrar el trabajo, debe comprobarse:
- que la seccion aparece en `home`
- que el item seleccionado cambia la preview
- que las imagenes cargan desde `public`
- que el layout responde bien en movil y desktop
- que `npm run build` sigue pasando
