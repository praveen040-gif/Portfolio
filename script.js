//   Active the menus code
  const navLinks1 = document.querySelectorAll(".nav-links li a");

  navLinks1.forEach(link => {
    link.addEventListener("click", function() {
      // Remove active from all
      navLinks1.forEach(item => item.classList.remove("active"));
      // Add active to clicked link
      this.classList.add("active");
    });
  });


 
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Show success message
    document.getElementById("successMessage").style.display = "block";

    // Clear all input fields
    this.reset();
  });







 
