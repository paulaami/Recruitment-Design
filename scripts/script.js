
const viewElems = {}

const getDOMElem = id => {
  return document.getElementById(id)
}

const connectHTMLElems = () => {
  viewElems.burgerBtn = getDOMElem('burgerBtn')
  viewElems.burgerIcon = getDOMElem('burgerIcon')
  viewElems.closeIcon = getDOMElem('closeIcon')

  viewElems.navList = getDOMElem('navList')

  viewElems.currentPage = getDOMElem('currentPage')
  viewElems.currentSubpage = getDOMElem('currentSubpage')

  viewElems.aboutLink = getDOMElem('aboutLink')
  viewElems.collectionLink = getDOMElem('collectionLink')
}

const initializeApp = () => {
  connectHTMLElems()
  viewElems.burgerBtn.addEventListener('click', onClickMenu)
}


const onClickMenu = () => {
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

document.addEventListener('DOMContentLoaded', initializeApp)


const burgerBtn = document.querySelector(".navigation__container-hamburger");
const burgerIcon = burgerBtn.querySelector(".burger-icon");
const closeIcon = burgerBtn.querySelector(".close-icon");
let pathname = window.location.pathname;


burgerBtn.addEventListener("click", onClickMenu);

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
