// A simple array of product data (simulating a database)
const products = [
    { id: 1, name: "Smartphone X10", price: 12999, image: "https://via.placeholder.com/200x180?text=Smartphone" },
    { id: 2, name: "Wireless Headphones Pro", price: 2499, image: "https://via.placeholder.com/200x180?text=Headphones" },
    { id: 3, name: "Smart Watch Z", price: 3999, image: "https://via.placeholder.com/200x180?text=SmartWatch" },
    { id: 4, name: "Gaming Laptop 5000", price: 54999, image: "https://via.placeholder.com/200x180?text=Laptop" },
];

const productsContainer = document.getElementById('products-container');
const cartIcon = document.querySelector('.cart-icon');
let cartCount = 0;

// Function to render all products
function renderProducts() {
    products.forEach(product => {
        // Create the HTML element for a product card
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });

    // Add event listeners for the Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to handle adding a product to the "cart"
function addToCart(event) {
    const productId = event.target.getAttribute('data-id');
    const product = products.find(p => p.id == productId);

    if (product) {
        cartCount++;
        cartIcon.textContent = `🛒 Cart (${cartCount})`;
        alert(`Added ${product.name} to the cart! (This is a simple alert, a real cart is much more complex)`);
        
        // Disable the button temporarily to show it was clicked
        event.target.textContent = 'Added!';
        setTimeout(() => {
            event.target.textContent = 'Add to Cart';
        }, 1000);
    }
}

// Load products when the page loads
document.addEventListener('DOMContentLoaded', renderProducts);
