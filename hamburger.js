const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

// Add close button inside sidebar
const closeBtn = document.createElement("div");
closeBtn.classList.add("close-btn");
closeBtn.innerHTML = "&times;";
navLinks.prepend(closeBtn);

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});
