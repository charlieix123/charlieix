const products = [
    { id: 1, name: "Nike Shoes", category: "shoes", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Adidas Sneakers", category: "shoes", price: 3000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "T-Shirt", category: "clothes", price: 500, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Jeans", category: "clothes", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Wrist Watch", category: "accessories", price: 1500, image: "https://via.placeholder.com/150" },
];

// Initialize cart
let cart = [];

// Display latest products
function displayLatestProducts() {
    const latestProductsDiv = document.getElementById("latest-products");
    latestProductsDiv.innerHTML = "";
    const latestProduct = products[0]; // Just displaying the first product as latest
    latestProductsDiv.innerHTML += `<div class="product">
        <img src="${latestProduct.image}" alt="${latestProduct.name}">
        <h3>${latestProduct.name}</h3>
        <p>Price: ₱${latestProduct.price}</p>
        <button onclick="addToCart(${latestProduct.id})">Add to Cart</button>
    </div>`;
}

// Display products
function displayProducts(category) {
    const productListDiv = document.getElementById("product-list");
    productListDiv.innerHTML = "";
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    
    filteredProducts.forEach(product => {
        productListDiv.innerHTML += `<div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₱${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
    });
}

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Update cart
function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `<div class="cart-item">
            <h3>${item.name}</h3>
            <p>Price: ₱${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>`;
    });
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Filter products by category
function filterProducts(category) {
    displayProducts(category);
}

// Show checkout modal
function showCheckout() {
    document.getElementById("checkout-modal").style.display = "block";
}

// Close modal
function closeModal() {
    document.getElementById("checkout-modal").style.display = "none";
}

// Select payment method
function selectPayment(method) {
    const paymentDetailsDiv = document.getElementById("payment-details");
    if (method === 'cash') {
        paymentDetailsDiv.innerHTML = `<p>Pay at the store. Address: 123 Main St, Quezon City</p>`;
    } else {
        paymentDetailsDiv.innerHTML = `<p>Pay online using GCash: 123456789</p>
        <p>Contact Seller: seller@example.com</p>`;
    }
}

// Initial load
displayLatestProducts();
displayProducts('all');
