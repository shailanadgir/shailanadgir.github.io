document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
  });
}
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = document.getElementById('formNote');
    if (note) note.textContent = 'Thanks! This demo form is ready. Connect it to Formspree or a serverless email handler before going live.';
    form.reset();
  });
}
