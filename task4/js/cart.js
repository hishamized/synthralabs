document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotal.textContent = "";
      return;
    }

    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      const row = document.createElement("div");
      row.className = "row mb-4 align-items-center border-bottom pb-3";

      row.innerHTML = `
        <div class="col-md-2">
          <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
        </div>
        <div class="col-md-3">
          <h5>${product.name}</h5>
          <p class="text-muted">$${product.price.toFixed(2)}</p>
        </div>
        <div class="col-md-3">
          <input type="number" min="1" value="${item.quantity}" class="form-control quantity-input" data-id="${item.id}">
        </div>
        <div class="col-md-2">
          <p>$${itemTotal.toFixed(2)}</p>
        </div>
        <div class="col-md-2">
          <button class="btn btn-danger btn-sm remove-btn" data-id="${item.id}">Remove</button>
        </div>
      `;

      cartItemsContainer.appendChild(row);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }

  
  cartItemsContainer.addEventListener("change", function (e) {
    if (e.target.classList.contains("quantity-input")) {
      const id = parseInt(e.target.dataset.id);
      const quantity = parseInt(e.target.value);

      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    }
  });


  cartItemsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      const id = parseInt(e.target.dataset.id);
      cart = cart.filter(i => i.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  renderCart();
});
