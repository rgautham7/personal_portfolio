// Export the setTheme function
export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  const sunIcon = document.querySelectorAll('.sun-icon');
  const moonIcon = document.querySelectorAll('.moon-icon');
  
  if (theme === 'dark') {
    sunIcon.forEach(icon => icon.style.display = 'block');
    moonIcon.forEach(icon => icon.style.display = 'none');
    document.documentElement.style.setProperty('--clr-bg', 'var(--clr-dark)');
    document.documentElement.style.setProperty('--clr-text', 'var(--clr-light)');
    document.documentElement.style.setProperty('--clr-text-muted', 'var(--clr-slate400)');
    document.documentElement.style.setProperty('--clr-title', 'var(--clr-light)');
  } else {
    sunIcon.forEach(icon => icon.style.display = 'none');
    moonIcon.forEach(icon => icon.style.display = 'block');
    document.documentElement.style.setProperty('--clr-bg', 'var(--clr-light)');
    document.documentElement.style.setProperty('--clr-text', 'var(--clr-dark)');
    document.documentElement.style.setProperty('--clr-text-muted', 'var(--clr-slate600)');
    document.documentElement.style.setProperty('--clr-title', 'var(--clr-dark)');
  }
}

// Function to toggle theme
export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Initialize theme
const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(storedTheme);

// Set up event listeners for theme toggles
document.addEventListener('DOMContentLoaded', () => {
  const themeToggles = document.querySelectorAll('[id$="theme-toggle"]');
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
  });
});
