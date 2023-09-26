import "./css/menu-page.css";
const menuPage = (() => {
  const create = () => {
    let pageContainer = document.createElement("div");

    let menu = document.createElement("div");

    let menuButton = document.createElement("button");

    pageContainer.classList.add("menu-page");

    menuButton.classList.add("menu-btn", "btn");

    menu.appendChild(menuButton);

    pageContainer.appendChild(menu);
    return pageContainer;
  };
  return { create };
})();
export default menuPage;
