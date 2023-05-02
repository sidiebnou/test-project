
// JavaScript for navigation menu
const navMenu = document.querySelector('.nav-menu');
const navDropdown = document.querySelector('.nav-dropdown');

// Add click event listener to navDropdown label
document.querySelector('.nav-dropdown-label').addEventListener('click', function() {
  navDropdown.classList.toggle('show');
});

// JavaScript for light/dark theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to toggle between light and dark theme
function toggleTheme() {
  body.classList.toggle('dark-theme');
}

// Add change event listener to themeToggle input
themeToggle.addEventListener('change', toggleTheme);

// JavaScript for mobile dropdown menu
const navItems = document.querySelectorAll('.nav-item');

// Add click event listener to navItems for mobile view
navItems.forEach(function(item) {
  item.addEventListener('click', function() {
    navDropdown.classList.remove('show');
  });
});

  