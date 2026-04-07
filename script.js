// script.js

// Dropdown Menu Toggle
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('is-active');
});

// Navigation Menu Toggle for Mobile
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('.nav-menu');
mobileNavToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});

// Smooth Scrolling for Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add to Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.getAttribute('data-id');
        if (!cart.includes(itemId)) {
            cart.push(itemId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCounter();
        }
    });
});

// Remove from Cart Functionality
const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
removeFromCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.getAttribute('data-id');
        cart = cart.filter(id => id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCounter();
    });
});

// Cart Counter Display
function updateCartCounter() {
    const cartCounter = document.querySelector('.cart-counter');
    cartCounter.innerText = cart.length;
}

// Product Search/Filter Functionality
const searchInput = document.querySelector('#product-search');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const text = product.textContent.toLowerCase();
        product.style.display = text.includes(filter) ? '' : 'none';
    });
});

// Form Validation for Contact Form
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }
    // Process the form... (e.g., send the data)
});

// Dynamic Price Calculations
const priceElements = document.querySelectorAll('.price');
priceElements.forEach(price => {
    const dynamicPriceInput = price.querySelector('.price-input');
    dynamicPriceInput.addEventListener('change', () => {
        const quantity = dynamicPriceInput.value;
        price.querySelector('.total-price').innerText = calculatePrice(quantity);
    });
});

function calculatePrice(quantity) {
    const basePrice = 10; // Example base price for calculations
    return `$${(basePrice * quantity).toFixed(2)}`;
}