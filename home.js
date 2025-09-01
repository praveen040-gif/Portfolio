const roles = ["Web Developer", "Freelancer", "Designer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 120;  // smoother typing
const erasingSpeed = 60;  // slightly faster erase
const delayBetweenRoles = 1500; // wait before erasing
const typingElement = document.querySelector(".typing-text");

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenRoles);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(type, 1000);
});
