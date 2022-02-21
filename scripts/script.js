"use strict";

import { mapListToDOMElems } from "./DOMActions.js";

// Creating class
class pageTemplate {
  constructor() {
    this.viewElems = {};
    this.initializeApp();
  }

  initializeApp = () => {
    this.connectDOMElems();
    this.setupListener();
    this.detectPage();
  };

  // List of all elements with ID's from html
  connectDOMElems = () => {
    const listofIds = [...document.querySelectorAll("[id]")].map((el) => el.id);
    this.viewElems = mapListToDOMElems(listofIds);
  };

  // Toggle menu icon classes
  onClickMenu = () => {
    this.viewElems.navList.classList.toggle("active");
    this.viewElems.burgerIcon.classList.toggle("hide");
    this.viewElems.closeIcon.classList.toggle("active");

    this.viewElems.navList.classList.contains("active")
      ? this.setAriaAttr(true)
      : this.setAriaAttr(false);
  };

  setAriaAttr = (boolean) => {
    this.viewElems.burgerBtn.setAttribute("aria-expanded", boolean);
  };

  // Detects the current page and edits navigation links and colors
  pathname = window.location.pathname;

  detectPage = () => {
    if (this.pathname.includes("about")) {
      this.changeCurrentLink("About");
      this.viewElems.aboutLink.style.color = "#000";
    } else if ( this.pathname.includes("collection") || this.pathname.includes("item")) {
      this.changeCurrentLink("Collection");
      this.viewElems.collectionLink.style.color = "#fff";

      this.detectSinglePage()
    }
  };

  detectSinglePage = () => {
    if (this.viewElems.currentSubpage) this.viewElems.currentSubpage.textContent = "Collection Item";
  }

  changeCurrentLink = (str) => {
    this.viewElems.currentPage.textContent = `${str}`;
  };

  // Adds Listener to hamburger menu

  setupListener = () => {
    this.viewElems.burgerBtn.addEventListener("click", this.onClickMenu);
  };
}

document.addEventListener("DOMContentLoaded", new pageTemplate());
