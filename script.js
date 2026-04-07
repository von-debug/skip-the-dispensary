// script.js

// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Function to show/hide dropdown categories
function toggleDropdown(event) {
    const dropdown = event.target.nextElementSibling;
    dropdown.classList.toggle('show');
}

// Initialize event listeners for navigation and dropdown elements
function init() {
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);

    const dropdowns = document.querySelectorAll('.category-dropdown-toggle');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', toggleDropdown);
    });
}

// Run the init function on page load
window.onload = init;