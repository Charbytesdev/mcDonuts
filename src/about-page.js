import "./css/about-page.css";
const aboutPage = (() => {
  const create = () => {
    let pageContainer = document.createElement("div");

    let about = document.createElement("div");

    let aboutText = document.createElement("div");

    pageContainer.classList.add("about-page");
    aboutText.classList.add("about-text", "btn");

    aboutText.textContent = "About";

    about.appendChild(aboutText);

    pageContainer.appendChild(about);
    return pageContainer;
  };
  return { create };
})();
export default aboutPage;
