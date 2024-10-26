const themeToggle = document.getElementById('theme-toggle');
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    document.documentElement.style.setProperty('--clr-bg', 'var(--clr-dark)');
    document.documentElement.style.setProperty('--clr-text', 'var(--clr-light)');
    document.documentElement.style.setProperty('--clr-text-muted', 'var(--clr-slate400)');
    document.documentElement.style.setProperty('--clr-title', 'var(--clr-light)');
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    document.documentElement.style.setProperty('--clr-bg', 'var(--clr-light)');
    document.documentElement.style.setProperty('--clr-text', 'var(--clr-dark)');
    document.documentElement.style.setProperty('--clr-text-muted', 'var(--clr-slate600)');
    document.documentElement.style.setProperty('--clr-title', 'var(--clr-dark)');
  }
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);
