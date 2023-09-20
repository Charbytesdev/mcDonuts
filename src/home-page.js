import BGImageSource from "./bg-image.jpg";

export default function () {
  const nav = document.createElement("nav");
  const main = document.createElement("main");

  const restaurantName = document.createElement("h1");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const aboutButton = document.createElement("button");
  const bgImage = document.createElement("img");

  nav.classList.add("nav-bar");
  restaurantName.classList.add("restaurant-name");
  homeButton.classList.add("home-btn");
  menuButton.classList.add("menu-btn");
  aboutButton.classList.add("about-btn");

  bgImage.src = BGImageSource;
  restaurantName.textContent = "mcDonuts";

  nav.appendChild(restaurantName);
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutButton);
  main.appendChild(bgImage);

  document.body.appendChild(nav);
  document.body.appendChild(main);
}
