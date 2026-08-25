# Buzón de Sugerencias — Cafetería

Backend en Node.js + Express que recibe sugerencias sobre el servicio de la cafetería, las guarda en memoria y las muestra en un panel de administración.

**URL pública:** https://buzon-sugerencias-cafeteria.onrender.com

**Repositorio:** https://github.com/jairoferney-jairo/buzon-sugerencias-cafeteria

---

## Historias de usuario

```
Como estudiante
quiero enviar una sugerencia sobre el servicio de la cafetería
para que el equipo encargado la revise y mejore la atención

Como estudiante
quiero elegir si mi sugerencia es sobre comida, precios o atención
para que llegue clasificada al área correcta

Como administrador de la cafetería
quiero ver todas las sugerencias recibidas en un panel
para identificar quejas o ideas repetidas y priorizar mejoras
```

---

## Tecnologías

- Node.js + Express (backend y rutas API)
- HTML/CSS/JS (formulario y panel de administración)
- StackBlitz (desarrollo, sin instalación local)
- GitHub (control de versiones)
- Render (despliegue y hosting)

## Rutas del API

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Formulario de envío de sugerencias |
| POST | `/api/sugerencias` | Recibe y guarda una sugerencia nueva |
| GET | `/api/sugerencias` | Devuelve la lista de sugerencias en JSON |
| GET | `/admin.html` | Panel de administración |
| * | cualquier otra ruta | Devuelve error 404 en JSON |

---

## Casos de prueba

| Acción | Resultado esperado | ¿Pasó? |
|---|---|---|
| Enviar sugerencia completa | Se guarda y aparece en admin.html | ✅ |
| Enviar con mensaje vacío | El servidor no la guarda | ✅ |
| Ver panel de administración | Aparece la lista completa | ✅ |
| Visitar una ruta inexistente | Devuelve error 404 en JSON | ✅ |

---

## Retrospectiva

**¿Qué funcionó bien?**
La conexión entre el formulario, el servidor y el panel de administración funcionó sin mayores problemas una vez que el código de `index.js` quedó bien copiado. Usar `fetch` para enviar los datos como JSON y `express.json()` para leerlos en el servidor hizo que el flujo completo (enviar sugerencia → guardarla → verla en `/admin.html`) fuera directo de implementar. StackBlitz también facilitó mucho el trabajo, al no tener que instalar nada localmente.

**¿Qué nos costó más trabajo?**
La parte de despliegue fue la más complicada. Al conectar StackBlitz con GitHub, el repositorio no se creó correctamente la primera vez, lo que generó que Render no encontrara ningún repositorio para desplegar. Tuvimos que verificar directamente en GitHub que el repositorio existiera antes de continuar, y repetir el proceso de conexión. También tuvimos que estar atentos a que el editor no confundiera nuestro código real con la traducción automática del navegador, que cambiaba nombres de archivos y palabras clave en pantalla (aunque no en el código real).

**¿Qué haríamos distinto si empezáramos de nuevo?**
Verificaríamos desde el inicio que el repositorio se creó correctamente en GitHub antes de pasar a Render, en lugar de asumir que el botón "Create a repository" de StackBlitz completó el proceso automáticamente. También revisaríamos con más cuidado el código de `index.js` antes de guardar, para no dejar bloques de código duplicados (como el manejo de error 404 que quedó repetido dos veces).

**¿Qué le agregaríamos al buzón en una siguiente versión?**
Nos gustaría agregar una base de datos real (como SQLite o MongoDB) para que las sugerencias no se pierdan si el servidor se reinicia, ya que actualmente solo se guardan en memoria. También sería útil agregar un botón en el panel de administración para marcar cada sugerencia como "revisada" o "resuelta", y quizás un filtro por categoría para encontrar más rápido las sugerencias de un área específica.