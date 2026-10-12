window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
});

const backdrop = document.getElementById('modalBackdrop');
let activeModal = null;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  activeModal = modal;
  modal.classList.add('is-open');
  backdrop.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  activeModal = null;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

const sections = document.querySelectorAll('main section[id]');
const navLinkEls = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();
