// Toggle phone specs section
document.addEventListener("DOMContentLoaded", function () {
    const viewMoreButtons = document.querySelectorAll(".view-more-btn");
  
    viewMoreButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const specs = this.nextElementSibling;
        specs.classList.toggle("hidden");
  
        // Change button text
        if (specs.classList.contains("hidden")) {
          this.textContent = "View More";
        } else {
          this.textContent = "View Less";
        }
      });
    });
  });
  
  // Sample alert when button is clicked
  function showAlert() {
    alert("Thanks for your interest! Feature coming soon...");
  }
  