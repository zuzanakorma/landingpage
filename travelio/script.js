const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", (e) => {
  navbar.classList.toggle("change");
});
