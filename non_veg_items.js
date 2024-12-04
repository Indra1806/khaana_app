let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;

    updateCartDisplay();
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear the current cart display

    cart.forEach((item, index) => {
        const newItem = document.createElement('li');
        newItem.textContent = `${item.name} - ₹${item.price}`;
        newItem.classList.add('cart-item');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        newItem.appendChild(removeButton);

        cartItems.appendChild(newItem);
    });

    document.getElementById('total-price').textContent = `Total Price: ₹${totalPrice}`;
}

function redirectToOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    window.location.href = 'dummy_payment_gateway.html'; // Redirect to the dummy payment gateway page
}