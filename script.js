function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price, image });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`₹{name} added to cart!`);
}

function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
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
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function checkout() {
  window.location.href = 'checkout.html';
}