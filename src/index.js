import "./css/global.css";
import homePage from "./home-page";
import navBar from "./nav-bar";

// const navButtons = nav.childNodes[1];
// const homeButton = navButtons.childNodes[0];
// const menuButton = navButtons.childNodes[1];
// const aboutButton = navButtons.childNodes[2];

const bodyDisplay = (() => {
  let _currentPage;
  let _pageList = [];

  const setCurrentPage = (currentPage) => {
    _currentPage = currentPage;
  };

  const append = (...nodes) => {
    nodes.forEach((node) => {
      document.body.append(node);
    });
  };

  const createPages = (...pages) => {
    pages.forEach((page) => _pageList.push(page.create()));
  };

  const swapToPage = (page) => {
    _currentPage.style.display = "none";
    let pageNode = page.create();
    setCurrentPage(pageNode);
    append(pageNode);
  };

  const _initialize = (() => {
    append(navBar.create());
    createPages(homePage);
    setCurrentPage(_pageList[0]);
    swapToPage(homePage);
  })();

  return { append, swapToPage };
})();
