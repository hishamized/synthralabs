document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");

  if (!products || products.length === 0) {
    productList.innerHTML = "<p>No products available.</p>";
    return;
  }

  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-3 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <a href="product.html?id=${product.id}" class="btn btn-primary mt-auto">View Details</a>
        </div>
      </div>
    `;

    productList.appendChild(col);
  });
});
