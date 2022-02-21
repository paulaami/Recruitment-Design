const burgerBtn = document.querySelector(".navigation__container-hamburger");
const burgerIcon = burgerBtn.querySelector(".burger-icon");
const closeIcon = burgerBtn.querySelector(".close-icon");
const mediaQuery = window.matchMedia("(min-width: 1439px)");

const handleNav = () => {
  const nav = document.querySelector(".list-level-one");
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
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

const switchIcon = () => {
  if (mediaQuery.matches) {
    burgerBtn.disabled = true;
  } else {
    burgerBtn.disabled = false;
  }
};

mediaQuery.addListener(switchIcon);

const currentPage = document.querySelector(".header__nav-current");
const currentSubpage = document.querySelector(".header__nav-subpage");
const aboutLink = document.querySelector(".about-link");
const collectionLink = document.querySelector(".collection-link");
let pathname = window.location.pathname;

const detectPage = () => {
  if (pathname.includes("about")) {
    currentPage.textContent = "About";
    aboutLink.style.color = "#000";
  } else if (pathname.includes("collection") || pathname.includes("item")) {
    currentPage.textContent = "Collection";
    collectionLink.style.color = "#fff";
    if (currentSubpage) currentSubpage.textContent = 'Collection Item'
  }
};

detectPage();

// switch (pathname) {
//   case "/about.html":
//   case "/Recruitment-Design/about.html": //path contains about
//     currentPage.textContent = "About";
//     aboutLink.style.color = "#000";
//     break;
//   case "/collection.html":
//   case "/Recruitment-Design/collection.html": //path contains collection
//     currentPage.textContent = "Collection";
//     collectionLink.style.color = "#fff";
//     break;
// }

console.log(pathname);
