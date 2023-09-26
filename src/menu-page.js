import "./css/menu-page.css";
const menuPage = (() => {
  const create = () => {
    let pageContainer = document.createElement("div");

    let menu = document.createElement("div");
    let header = document.createElement("div");
    let menuButton = document.createElement("button");

    pageContainer.classList.add("menu-page");
    menu.classList.add("menu");
    header.classList.add("menu-header");
    menuButton.classList.add("menu-btn", "btn");

    header.textContent = "MENU";

    menu.appendChild(header);
    menu.appendChild(menuButton);

    pageContainer.appendChild(menu);
    return pageContainer;
  };
  return { create };
})();
export default menuPage;
