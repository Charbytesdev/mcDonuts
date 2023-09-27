import "../css/about-page.css";
const aboutPage = (() => {
  const create = () => {
    let pageContainer = document.createElement("div");

    let about = document.createElement("div");

    let aboutText = document.createElement("div");

    pageContainer.classList.add("about-page");
    aboutText.classList.add("about-header");
    about.classList.add("about-container");
    aboutText.textContent = "ABOUT US";

    about.appendChild(aboutText);

    pageContainer.appendChild(about);
    return pageContainer;
  };
  return { create };
})();
export default aboutPage;
