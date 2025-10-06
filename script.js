function registrarInteresse() {
  gtag('event', 'click', {
    'event_category': 'CTA',
    'event_label': 'Quero Aprender Tecnologia'
  });

  const msg = document.getElementById('mensagem');
  msg.style.display = 'block';
  setTimeout(() => (msg.style.opacity = 1), 10);

  setTimeout(() => {
    msg.style.opacity = 0;
    setTimeout(() => (msg.style.display = 'none'), 600);
  }, 4000);
}

