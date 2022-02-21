const burgerBtn = document.querySelector(".navigation__container-hamburger");
const burgerIcon = burgerBtn.querySelector(".burger-icon");
const closeIcon = burgerBtn.querySelector(".close-icon");
let pathname = window.location.pathname;

const handleNav = () => {
  const navList = document.querySelector(".navigation__container-list");
  navList.classList.toggle("active");
  if (navList.classList.contains("active")) {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    burgerBtn.setAttribute("aria-expanded", "true");
  } else {
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    burgerBtn.setAttribute("aria-expanded", "false");
  }
};

burgerBtn.addEventListener("click", handleNav);

const detectPage = () => {
  const currentPage = document.querySelector(".header__nav-current");
  const currentSubpage = document.querySelector(".header__nav-subpage");
  const aboutLink = document.querySelector(".about-link");
  const collectionLink = document.querySelector(".collection-link");
  if (pathname.includes("about")) {
    currentPage.textContent = "About";
    aboutLink.style.color = "#000";
  } else if (pathname.includes("collection") || pathname.includes("item")) {
    currentPage.textContent = "Collection";
    collectionLink.style.color = "#fff";
    if (currentSubpage) currentSubpage.textContent = "Collection Item";
  }
};

detectPage();
