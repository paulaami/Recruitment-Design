const burgerBtn = document.querySelector(".navigation__container-hamburger");
const icon = burgerBtn.querySelector(".icon");
const mediaQuery = window.matchMedia("(min-width: 1439px)");

const handleNav = () => {
  const nav = document.querySelector(".list-level-one");
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    icon.src = `./assets/svg/close.svg`;
    burgerBtn.setAttribute("aria-expanded", "true");
  } else {
    icon.src = `./assets/svg/hamburger.svg`;
    burgerBtn.setAttribute("aria-expanded", "false");
  }
};

const changeIcon = () => {
  if (mediaQuery.matches) {
    burgerBtn.disabled = true;
  } else {
    burgerBtn.disabled = false;
  }
};

mediaQuery.addListener(changeIcon);
burgerBtn.addEventListener("click", handleNav);

const currentPage = document.querySelector(".header__nav-current");
const aboutLink = document.querySelector(".about-link");
const collectionLink = document.querySelector(".collection-link");
let pathname = window.location.pathname;

switch (pathname) {
  case "/about.html":
  case "/Recruitment-Design/about.html":
    currentPage.textContent = "About";
    aboutLink.style.color = "#000";
    break;
  case "/collection.html":
  case "/Recruitment-Design/collection.html":
    currentPage.textContent = "Collection";
    collectionLink.style.color = "#fff";
    break;
}

console.log(pathname);
