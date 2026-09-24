const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const datos = new FormData(formulario);

  const respuesta = await fetch('/api/sugerencias', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre: datos.get('nombre'),
      categoria: datos.get('categoria'),
      prioridad: datos.get('prioridad'),
      mensaje: datos.get('mensaje'),
      urgente: datos.get('urgente') === 'on'
    })
  });

  if (!respuesta.ok) {
    alert('Error: no se pudo enviar la sugerencia');
    return;
  }

  formulario.reset();
  alert('¡Gracias por tu sugerencia!');
});
