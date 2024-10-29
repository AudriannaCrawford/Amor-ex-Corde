let products = [
    { id: 1, name: 'Flora', price: 14500.00 },
    { id: 2, name: 'Rose', price: 15000.00 },
    { id: 3, name: 'Malibu', price: 16000.00 },
    { id: 4, name: 'Lemon Lust', price: 14000.00 },
    { id: 5, name: 'Orange Zest', price: 14500.00 },
    { id: 6, name: 'Malibu', price: 15000.00 },
    { id: 7, name: 'Burberry', price: 25500.00 },
    { id: 8, name: 'Bleu Dreams', price: 16000.00 },
    { id: 9, name: 'Earth\'s Essence', price: 26500.00 }
];

let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage or initialize as empty

// Add product to cart and update cart count
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    let cartItem = cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.qty += 1; // Increase quantity if already in cart
    } else {
        cart.push({ product: product, qty: 1 }); // Add new product to cart
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage

    document.getElementById('cart-count').innerText = cart.length;
    alert(`${product.name} added to the cart!`);
}

// Show cart items on the cart page
function showCart() {
    window.location.href = "cart.html"; // Redirect to cart page
}

// Checkout function to calculate totals and show the invoice
function checkout() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.product.price * item.qty;
    });

    let tax = subtotal * 0.15; // 15% tax
    let discount = subtotal * 0.10; // 10% discount
    let total = subtotal + tax - discount;

    localStorage.setItem('subtotal', subtotal.toFixed(2));
    localStorage.setItem('tax', tax.toFixed(2));
    localStorage.setItem('discount', discount.toFixed(2));
    localStorage.setItem('total', total.toFixed(2));

    window.location.href = "invoice.html"; // Redirect to invoice page
}
