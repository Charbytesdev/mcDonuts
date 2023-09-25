import "./css/global.css";
import homePage from "./home-page";
import navBar from "./nav-bar";

// const navButtons = nav.childNodes[1];
// const homeButton = navButtons.childNodes[0];
// const menuButton = navButtons.childNodes[1];
// const aboutButton = navButtons.childNodes[2];

const body = (() => {
  const create = () => {
    bodyDisplay.append(bodyDisplay.createPage(navBar));
    bodyDisplay.append(bodyDisplay.createPage(homePage));
  };
  return { create };
})();

const bodyDisplay = (() => {
  const createPage = (page) => {
    return page.create();
  };
  const append = (element) => {
    document.body.appendChild(element);
  };
  return { createPage, append };
})();

body.create();
