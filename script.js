// Form validation & visual feedback
document.getElementById('signup').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  this.querySelectorAll('input, select').forEach(el => {
    const fb = el.nextElementSibling; // small.feedback
    if (!el.checkValidity()) {
      valid = false;
      el.classList.add('invalid');
      fb.textContent = `Please provide a valid ${el.name}.`;
    } else {
      el.classList.remove('invalid');
      fb.textContent = '';
    }
  });

  if (valid) {
    document.getElementById('form-message').textContent = 'Thanks for signing up!';
    this.reset();
  }
});

// Scroll highlight nav
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav ul');
  if (window.scrollY > 200) nav.classList.add('highlight-js');
  else nav.classList.remove('highlight-js');
});
