const toggleBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navMenuLinks = document.querySelectorAll(".nav__menu li a");

//toggle menu
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!e.target.matches(".nav__menu") && !e.target.closest(".nav__toggle")) {
    navMenu.classList.remove("active");
    toggleBtn.classList.remove("active");
  }
});

//toggle doctors cards
const container = document.querySelector(".doctors__container");
const nextBtn = document.querySelector(".doctors__controls__next");
const prevBtn = document.querySelector(".doctors__controls__prev");

const cardWidth = container.querySelector(".doctor").offsetWidth + 15;

const changeStyle = (currentBtn, newBtn) => {
  currentBtn.style.color = "#96a8cf";
  currentBtn.style.borderColor = "#96a8cf";
  currentBtn.style.cursor = "initial";

  newBtn.style.color = "#2d529f";
  newBtn.style.borderColor = "#2d529f";
  newBtn.style.cursor = "pointer";
};
nextBtn.addEventListener("click", (event) => {
  container.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", (event) => {
  container.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
});
