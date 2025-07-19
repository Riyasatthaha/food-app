let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(' items added to cart!`);
}

function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'category-card';
    div.innerHTML = `
      <img src="₹{item.image}" alt="₹{item.name}" style="width:100px; height:80px;"><br>
      <h3>₹{item.name}</h3>
      <p>Price: ₹₹{item.price}</p>
      <button onclick="removeFromCart(₹{index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });
}


function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function checkout() {
  window.location.href = 'checkout.html';
}

window.onload = displayCart;

function placeOrder(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const payment = document.getElementById('payment').value;

  if (!name || !address || !payment) {
    alert('Please fill in all fields.');
    return;
  }

  localStorage.removeItem('cart');
  alert('Order Placed Successfully!');
  window.location.href = 'order.html';
}
