import "./css/global.css";
import navBar from "./nav-bar";
import homePage from "./home-page";
import menuPage from "./menu-page";
import aboutPage from "./about-page";

const body = (() => {
  let _currentPage;
  let _pageList = [];

  const setCurrentPage = (currentPage) => {
    _currentPage = currentPage;
  };

  const displayCurrentPage = () => {
    _currentPage.style.display = "flex";
  };

  const createNode = (node) => node.create();

  const append = (...nodes) => {
    nodes.forEach((node) => {
      document.body.append(node);
    });
  };

  const createPages = (...pages) => {
    pages.forEach((page) => {
      let pageNode = createNode(page);
      pageNode.style.display = "none";
      document.body.append(pageNode);
      _pageList.push(pageNode);
    });
  };

  const swapToPage = (page) => {
    if (_currentPage != page) {
      if (_currentPage) {
        _currentPage.style.display = "none";
      }
      setCurrentPage(page);
      displayCurrentPage();
    }
  };

  const initializeButtons = (navBar) => {
    let navButtons = [...navBar.children[1].children];
    navButtons.forEach(
      (button) =>
        (button.onclick = () => {
          swapToPage(_pageList[navButtons.indexOf(button)]);
        })
    );
  };

  const create = () => {
    let navBarNode = createNode(navBar);
    append(navBarNode);
    initializeButtons(navBarNode);
    createPages(homePage, menuPage, aboutPage);
    swapToPage(_pageList[0]);
  };
  return { create };
})();

body.create();
