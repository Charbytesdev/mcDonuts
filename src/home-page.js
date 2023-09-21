import "./css/style.css";

export default function () {
  const homePage = document.createElement("div");

  const nav = document.createElement("nav");
  const navButtonContainer = document.createElement("div");
  const main = document.createElement("main");
  const hero = document.createElement("div");

  const restaurantName = document.createElement("h1");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const aboutButton = document.createElement("button");

  homePage.classList.add("home-page");
  nav.classList.add("nav-bar");
  restaurantName.classList.add("restaurant-name");
  homeButton.classList.add("home-btn", "nav-btn");
  menuButton.classList.add("menu-btn", "nav-btn");
  aboutButton.classList.add("about-btn", "nav-btn");
  navButtonContainer.classList.add("nav-btn-container");

  restaurantName.textContent = "mcDonuts";
  homeButton.textContent = "HOME";
  menuButton.textContent = "MENU";
  aboutButton.textContent = "ABOUT";

  nav.appendChild(restaurantName);
  navButtonContainer.appendChild(homeButton);
  navButtonContainer.appendChild(menuButton);
  navButtonContainer.appendChild(aboutButton);
  nav.appendChild(navButtonContainer);

  homePage.appendChild(nav);
  homePage.appendChild(main);
  homePage.appendChild(hero);
  document.body.appendChild(homePage);
}
