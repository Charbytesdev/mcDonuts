import BGImageSource from "./bg-image.jpg";
import "./css/style.css";

export default function () {
  const nav = document.createElement("nav");
  const navButtonContainer = document.createElement("div");
  const main = document.createElement("main");

  const restaurantName = document.createElement("h1");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const aboutButton = document.createElement("button");
  const bgImage = document.createElement("img");
  const divHelper = document.createElement("div");

  nav.classList.add("nav-bar");
  restaurantName.classList.add("restaurant-name");
  homeButton.classList.add("home-btn", "nav-btn");
  menuButton.classList.add("menu-btn", "nav-btn");
  aboutButton.classList.add("about-btn", "nav-btn");
  navButtonContainer.classList.add("nav-btn-container");

  bgImage.src = BGImageSource;
  restaurantName.textContent = "mcDonuts";
  homeButton.textContent = "HOME";
  menuButton.textContent = "MENU";
  aboutButton.textContent = "ABOUT";

  nav.appendChild(restaurantName);
  navButtonContainer.appendChild(homeButton);
  navButtonContainer.appendChild(menuButton);
  navButtonContainer.appendChild(aboutButton);
  nav.appendChild(navButtonContainer);
  nav.appendChild(divHelper);
  main.appendChild(bgImage);

  document.body.appendChild(nav);
  document.body.appendChild(main);
}
