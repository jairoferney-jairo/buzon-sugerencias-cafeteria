const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let sugerencias = [];

app.post('/api/sugerencias', (req, res) => {
  const { nombre, categoria, mensaje } = req.body;

  if (!mensaje || mensaje.trim() === '') {
    return res.status(400).json({ error: 'El mensaje es obligatorio' });
  }

  sugerencias.push({ nombre, categoria, mensaje, fecha: new Date() });
  res.status(201).json({ ok: true });
});

app.get('/api/sugerencias', (req, res) => {
  res.json(sugerencias);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((req, res) => {
  // ← este está de más
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Buzón activo');
});
