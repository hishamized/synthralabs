document.addEventListener("DOMContentLoaded", function () {
  const productDetail = document.getElementById("product-detail");


  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));


  const product = products.find(p => p.id === productId);

  if (!product) {
    productDetail.innerHTML = "<p class='text-danger'>Product not found.</p>";
    return;
  }

  productDetail.innerHTML = `
    <div class="col-md-5">
      <img src="${product.image}" alt="${product.name}" class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-md-7">
      <h2>${product.name}</h2>
      <p class="text-muted">${product.description}</p>
      <h4 class="text-success">$${product.price.toFixed(2)}</h4>
      <button class="btn btn-primary mt-3" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}
