import "./css/global.css";
import navBar from "./js/nav-bar";
import homePage from "./js/home-page";
import menuPage from "./js/menu-page";
import aboutPage from "./js/about-page";

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

  const initializeHomePageMenuButton = () => {
    const viewMenuButton = _pageList[0].children[0].children[1];
    viewMenuButton.onclick = () => {
      swapToPage(_pageList[1]);
    };
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
    initializeHomePageMenuButton();
    swapToPage(_pageList[0]);
  };
  return { create };
})();

body.create();
