// Highlight active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
/* Typing Effect */
const typingElement = document.querySelector('.typing');
const roles = ["Software Engineering Student", "Web Developer", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newRoleDelay = 1500; // delay before erasing starts

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newRoleDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    roleIndex++;
    if (roleIndex >= roles.length) roleIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(type, newRoleDelay + 250);
});

if (typingElement) {
  const roles = ["Software Engineering Student", "Web Developer", "Tech Enthusiast","UI Designer"];
  let roleIndex = 0;
  let charIndex = 0;
  let typingDelay = 100;
  let erasingDelay = 60;
  let newRoleDelay = 1500; // delay before erasing starts

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typingElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newRoleDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      roleIndex++;
      if (roleIndex >= roles.length) roleIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (roles.length) setTimeout(type, newRoleDelay + 250);
  });
}

