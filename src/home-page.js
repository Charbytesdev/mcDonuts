import "./css/home-page.css";
const homePage = (() => {
  const create = () => {
    let pageContainer = document.createElement("div");

    let hero = document.createElement("div");

    let heroText = document.createElement("div");
    let heroButton = document.createElement("button");

    pageContainer.classList.add("home-page");

    hero.classList.add("hero");
    heroText.classList.add("hero-text");
    heroButton.classList.add("hero-btn", "btn");

    heroText.textContent = "Hungry for McDonuts?";
    heroButton.textContent = "View Menu";

    hero.appendChild(heroText);
    hero.appendChild(heroButton);

    pageContainer.appendChild(hero);
    return pageContainer;
  };
  return { create };
})();
export default homePage;
