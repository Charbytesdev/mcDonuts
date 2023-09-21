import "./css/nav-bar.css";

export default function () {
  const nav = document.createElement("nav");

  const restaurantName = document.createElement("h1");
  const navButtonContainer = document.createElement("div");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const aboutButton = document.createElement("button");

  nav.classList.add("nav-bar");

  restaurantName.classList.add("restaurant-name");
  navButtonContainer.classList.add("nav-btn-container");
  homeButton.classList.add("home-btn", "nav-btn", "btn");
  menuButton.classList.add("menu-btn", "nav-btn", "btn");
  aboutButton.classList.add("about-btn", "nav-btn", "btn");

  restaurantName.textContent = "mcDonuts";
  homeButton.textContent = "HOME";
  menuButton.textContent = "MENU";
  aboutButton.textContent = "ABOUT";

  nav.appendChild(restaurantName);
  navButtonContainer.appendChild(homeButton);
  navButtonContainer.appendChild(menuButton);
  navButtonContainer.appendChild(aboutButton);
  nav.appendChild(navButtonContainer);
  return nav;
}
