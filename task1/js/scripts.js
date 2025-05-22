function calculateAge() {
  var birthDate = new Date("2001-01-22");
  var currentDate = new Date();
  var age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  document.getElementById("age").textContent = age + " years";
}

document.addEventListener("DOMContentLoaded", function () {
  
  Promise.all([
    fetch("components/header.html").then((r) => r.text()),
    fetch("components/footer.html").then((r) => r.text()),
    fetch("components/hero.html").then((r) => r.text()),
    fetch("components/sidebar.html").then((r) => r.text())
  ])
    .then(([headerHtml, footerHtml, heroHtml, sidebarHtml]) => {
      
      document.getElementById("header").innerHTML = headerHtml;
      document.getElementById("footer").innerHTML = footerHtml;
      document.getElementById("hero").innerHTML = heroHtml;
      document.getElementById("sidebar").innerHTML = sidebarHtml;

      
      document.getElementById("app").style.display = "block";

      
      const sidebar = document.getElementById("sidebar");
      const sidebarToggle = document.getElementById("sidebarToggle");

      if (sidebarToggle) {
        sidebarToggle.addEventListener("click", function () {
          sidebar.classList.toggle("d-none");
        });
      }

      
      const contentSections = {
        "projects": "pages/projects.html",
        "about": "pages/about.html",
        "contact": "pages/contact.html",
        "skills": "pages/skills.html"
      };

      
      function showContent(page) {
        const content = document.getElementById("content");
        
        const allSections = document.querySelectorAll(".content-section");
        allSections.forEach(section => section.classList.add("d-none"));
        
        
        fetch(contentSections[page])
          .then((response) => response.text())
          .then((data) => {
            content.innerHTML = data;
            content.classList.remove("d-none"); 
            if (page === "about") {
              calculateAge();
            }
          });
      }

      
      const links = [
        { id: "page1Link", page: "projects" },
        { id: "page2Link", page: "about" },
        { id: "page3Link", page: "contact" },
        { id: "page4Link", page: "skills" },
        { id: "navPage1Link", page: "projects" },
        { id: "navPage2Link", page: "about" },
        { id: "navPage3Link", page: "contact" },
        { id: "navPage4Link", page: "skills" }
      ];

      
      links.forEach(({ id, page }) => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            showContent(page);
          });
        }
      });

      
      document.getElementById("content").classList.add("d-none");
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
});
