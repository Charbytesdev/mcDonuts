import "../css/nav-bar.css";
import iconSrc from "../img/donut.png";

const BUTTON_NAMES = ["HOME", "MENU", "ABOUT"];

const navBar = (() => {
  const create = () => {
    let nav = document.createElement("nav");

    let icon = new Image();
    let navButtonContainer = document.createElement("div");
    let homeButton = document.createElement("button");
    let menuButton = document.createElement("button");
    let aboutButton = document.createElement("button");

    nav.classList.add("nav-bar");

    icon.classList.add("nav-icon");
    navButtonContainer.classList.add("nav-btn-container");
    homeButton.classList.add("home-btn", "nav-btn", "btn");
    menuButton.classList.add("menu-btn", "nav-btn", "btn");
    aboutButton.classList.add("about-btn", "nav-btn", "btn");

    icon.src = iconSrc;
    [homeButton.textContent, menuButton.textContent, aboutButton.textContent] =
      BUTTON_NAMES;

    navButtonContainer.append(homeButton, menuButton, aboutButton);

    nav.append(icon, navButtonContainer);
    return nav;
  };

  return { create };
})();

export default navBar;
