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
