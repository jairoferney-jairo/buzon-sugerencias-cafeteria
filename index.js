const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let sugerencias = [];

app.post('/api/sugerencias', (req, res) => {
  const { nombre, categoria, prioridad, mensaje, urgente } = req.body;

  if (!mensaje || mensaje.trim() === '') {
    return res.status(400).json({ error: 'El mensaje es obligatorio' });
  }

  // Bonus: rechazar sin categoría
  if (!categoria) {
    return res.status(400).json({ error: 'La categoría es obligatoria' });
  }

  sugerencias.push({
    nombre,
    categoria,
    prioridad,
    mensaje,
    urgente: Boolean(urgente),
    fecha: new Date()
  });
  res.status(201).json({ ok: true });
});

app.get('/api/sugerencias', (req, res) => {
  res.json(sugerencias);
});

// Ruta nueva: total de sugerencias
app.get('/api/sugerencias/total', (req, res) => {
  res.json({ total: sugerencias.length });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Buzón activo');
});
