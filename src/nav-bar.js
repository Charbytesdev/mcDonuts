import "./css/nav-bar.css";

const BUTTON_NAMES = ["HOME", "MENU", "ABOUT"];

const navBar = (() => {
  const create = () => {
    let nav = document.createElement("nav");

    let restaurantName = document.createElement("h1");
    let navButtonContainer = document.createElement("div");
    let homeButton = document.createElement("button");
    let menuButton = document.createElement("button");
    let aboutButton = document.createElement("button");

    nav.classList.add("nav-bar");

    restaurantName.classList.add("restaurant-name");
    navButtonContainer.classList.add("nav-btn-container");
    homeButton.classList.add("home-btn", "nav-btn", "btn");
    menuButton.classList.add("menu-btn", "nav-btn", "btn");
    aboutButton.classList.add("about-btn", "nav-btn", "btn");

    restaurantName.textContent = "mcDonuts";
    [homeButton.textContent, menuButton.textContent, aboutButton.textContent] =
      BUTTON_NAMES;

    navButtonContainer.append(homeButton, menuButton, aboutButton);

    nav.append(restaurantName, navButtonContainer);
    return nav;
  };

  return { create };
})();

export default navBar;
