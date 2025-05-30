document.addEventListener("DOMContentLoaded", function () {
  const summaryContainer = document.getElementById("order-summary");
  const form = document.getElementById("checkout-form");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    summaryContainer.innerHTML = "<p>Your cart is empty.</p>";
    form.style.display = "none";
    return;
  }

  let total = 0;
  let summaryHTML = "<ul class='list-group mb-3'>";

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    summaryHTML += `
      <li class="list-group-item d-flex justify-content-between">
        <div>
          <h6 class="my-0">${product.name}</h6>
          <small class="text-muted">Quantity: ${item.quantity}</small>
        </div>
        <span class="text-muted">$${itemTotal.toFixed(2)}</span>
      </li>
    `;
  });

  summaryHTML += `
    <li class="list-group-item d-flex justify-content-between">
      <strong>Total</strong>
      <strong>$${total.toFixed(2)}</strong>
    </li>
  </ul>`;

  summaryContainer.innerHTML = summaryHTML;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Order placed successfully! (Form is not connected to a backend.)");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });
});
