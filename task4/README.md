Mini E-commerce Website

Overview

This project is a multi-page front-end mini e-commerce website designed to simulate an online shopping experience. It was created as part of the Synthra Labs Internship Task 4. The website demonstrates the ability to structure a larger web application and implement interactive features using HTML, Bootstrap for styling, and JavaScript for interactivity.

Features

Home/Product Listing Page: Displays a list of products with images, names, prices, and an "Add to Cart" button for quick addition to the shopping cart.

Product Details Page: Provides detailed information about a selected product, including description and price, with an option to add the product to the cart.

Shopping Cart Page: Allows users to view items added to the cart, update quantities, remove products, and view the total price dynamically.

Checkout Page: Contains a form to collect user shipping information (name, email, address, phone number) and presents an order summary with the list of products and total price. The form submission is simulated and not connected to a backend.

Navigation: A responsive navigation bar allows easy movement between pages: Home, Cart, and Checkout.

Data Handling: Products are managed using static JSON data stored in a JavaScript file. The shopping cart data is stored and managed using the browser's localStorage for persistence across sessions.

Technologies Used

HTML5 for structure and semantic markup.

Bootstrap 5 for responsive design and styling.

JavaScript for dynamic content rendering, user interaction, and localStorage management.

Bootstrap Icons for decorative icons in the footer.

How to Use

Open the index.html file in a modern web browser to start using the application.

Browse the products on the Home page, view product details, and add items to the cart.

Access the Cart page to modify quantities or remove items.

Proceed to the Checkout page to fill in shipping information and review the order summary.

Note that the checkout form is for demonstration purposes only and does not process real orders.

Folder Structure

index.html - Home and product listing page.

product.html - Product details page.

cart.html - Shopping cart page.

checkout.html - Checkout and order summary page.

css/styles.css - Custom styles (optional).

js/data.js - Contains static product data as JSON.

js/main.js - Handles product rendering and cart operations on index and product pages.

js/cart.js - Manages the shopping cart page functionality.

js/checkout.js - Manages the checkout page functionality.

Future Improvements

Integrate a backend API for dynamic product data and real order processing.

Add user authentication and order history tracking.

Enhance UI with animations and better accessibility support.

Implement payment gateway integration.

License

This project is created for educational purposes as part of the Synthra Labs Internship and is not intended for commercial use.
