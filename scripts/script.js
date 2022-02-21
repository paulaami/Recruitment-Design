'use strict'

import { mapListToDOMElems } from './DOMActions.js'

class pageTemplate {
  constructor() {
    this.viewElems = {}
  }

  connectDOMElems = () => {
    // list of all elements with ID's from html
    const listofIds = [...document.querySelectorAll('[id]')].map(el => console.log(el.id))
    this.viewElems = mapListToDOMElems(listofIds)
  }

}
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
  detectPage()
}


const onClickMenu = () => {
  viewElems.navList.classList.toggle("active")
  viewElems.burgerIcon.classList.toggle("hide")
  viewElems.closeIcon.classList.toggle("active")

  viewElems.navList.classList.contains("active") ? setAriaAttr(true) : setAriaAttr(false)
};

const setAriaAttr = (boolean) => {
  viewElems.burgerBtn.setAttribute("aria-expanded", boolean);
}


document.addEventListener('DOMContentLoaded', initializeApp)

let pathname = window.location.pathname;
const detectPage = () => {
  if (pathname.includes("about")) {
    viewElems.currentPage.textContent = "About";
    viewElems.aboutLink.style.color = "#000";
  } else if (pathname.includes("collection") || pathname.includes("item")) {
    viewElems.currentPage.textContent = "Collection";
    viewElems.collectionLink.style.color = "#fff";
    if (currentSubpage) viewElems.currentSubpage.textContent = "Collection Item";
  }
};

