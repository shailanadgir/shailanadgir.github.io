document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
  });
}

// Contact form (FormSubmit AJAX endpoint)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const note = document.getElementById('formNote');
    if (note) note.textContent = 'Sending...';
    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (resp.ok) {
        form.reset();
        if (note) note.textContent = 'Thanks! Your message has been sent.';
      } else {
        if (note) note.textContent = 'Hmm, something went wrong. Please email us directly.';
      }
    } catch (err) {
      if (note) note.textContent = 'Network error. Please try again.';
    }
  });
}
