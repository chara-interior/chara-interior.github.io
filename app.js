const mobileMenu = document.querySelector('.mobile-nav');

if (mobileMenu) {
  mobileMenu.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.open = false;
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') mobileMenu.open = false;
  });
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const name = contactForm.elements.namedItem('name').value.trim();
    const email = contactForm.elements.namedItem('email').value.trim();
    const message = contactForm.elements.namedItem('message').value.trim();
    const subject = `Anfrage über CHARA interior von ${name}`;
    const body = `Name: ${name}\nE-Mail: ${email}\n\n${message}`;
    const link = `mailto:info@chara-interior.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(link);
  });
}
