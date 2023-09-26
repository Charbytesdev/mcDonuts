import "./css/global.css";
import navBar from "./nav-bar";
import homePage from "./home-page";
import menuPage from "./menu-page";

// const navButtons = nav.childNodes[1];
// const homeButton = navButtons.childNodes[0];
// const menuButton = navButtons.childNodes[1];
// const aboutButton = navButtons.childNodes[2];

const body = (() => {
  let _currentPage;
  let _pageList = [];

  const setCurrentPage = (currentPage) => {
    _currentPage = currentPage;
    _currentPage.style.display = "flex";
  };

  const create = (node) => node.create();

  const append = (...nodes) => {
    nodes.forEach((node) => {
      document.body.append(node);
    });
  };

  const createPages = (...pages) => {
    pages.forEach((page) => _pageList.push(page.create()));
  };

  const swapToPage = (page) => {
    if (_currentPage != page) {
      if (_currentPage) {
        _currentPage.style.display = "none";
      }
      append(page);
      setCurrentPage(page);
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

  const initialize = (() => {
    let navBarNode = create(navBar);
    append(navBarNode);
    initializeButtons(navBarNode);
    createPages(homePage, menuPage);
    swapToPage(_pageList[0]);
  })();
})();
