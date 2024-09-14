const colors = [
  'rgba(125,91,177,1)',
  'rgba(175,113,186,1)',
  'rgba(136,52,148,1)',
  'rgba(146,73,190,1)',
  'rgba(150,78,154,1)',
  'rgba(105,48,163,1)',
  'rgba(240,120,166,1)'
];
let currentColorIndex = 0;

function changeHeaderColor() {
  const header = document.querySelector('header');
  header.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Function to toggle the visibility of one section and hide the other
function toggleContent(showId, hideId) {
  const showSection = document.getElementById(showId);
  const hideSection = document.getElementById(hideId);

  if (showSection.style.display === 'none' || showSection.style.display === '') {
    showSection.style.display = 'block'; // Show clicked section
    hideSection.style.display = 'none';  // Hide the other section
  } else {
    showSection.style.display = 'none'; // Toggle off if clicked again
  }
}

// Dark mode toggle logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Preserve the dark mode setting between page reloads
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  htmlElement.classList.add('dark');
}
