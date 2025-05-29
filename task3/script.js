document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("contactForm").reset();
  alert("Thank you! Your message has been received.");
});
