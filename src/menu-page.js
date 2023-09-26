import "./css/menu-page.css";
import bpSource from "./blue-paradise.jpeg";
import bdSource from "./blueberry-dance.jpeg";
import crSource from "./choco-rainbow.jpeg";
import dsSource from "./dark-side.jpeg";
import ioSource from "./icy-oreo.jpeg";
import mdSource from "./milky-donut.jpeg";
import wnSource from "./waffonut.jpeg";
import scSource from "./snowy-christmas.jpeg";

const menuPage = (() => {
  let _menu = document.createElement("div");

  const createImage = (source) => {
    let img = new Image();
    img.src = source;
    img.classList.add("image");
    return img;
  };

  const createImages = (...imageSources) => {
    return imageSources.map((imageSource) => createImage(imageSource));
  };

  const createImageLabels = (...labelNames) => {
    return labelNames.map((labelName) => {
      let label = document.createElement("div");
      label.textContent = labelName;
      label.classList.add("image-label");
      return label;
    });
  };

  const mergeImagesAndLabels = (images, labels) => {
    return (images, labels).map((_, i) => [images[i], labels[i]]).flat();
  };

  const appendMenu = (...nodes) => {
    _menu.append(...nodes);
  };

  const create = () => {
    let pageContainer = document.createElement("div");

    let header = document.createElement("div");
    let menuButton = document.createElement("button");

    pageContainer.classList.add("menu-page");
    _menu.classList.add("menu");
    header.classList.add("menu-header");
    menuButton.classList.add("menu-btn", "btn");

    header.textContent = "MENU";
    appendMenu(
      header,
      ...mergeImagesAndLabels(
        createImages(
          bpSource,
          bdSource,
          crSource,
          dsSource,
          ioSource,
          mdSource,
          wnSource,
          scSource
        ),
        createImageLabels(
          "BLUE PARADISE",
          "BLUEBERRY DANCE",
          "CHOCO RAINBOW",
          "DARK SIDE",
          "ICY OREO",
          "MILKY DONUT",
          "SNOWY CHRISTMAS",
          "WAFFONUT"
        )
      )
    );

    pageContainer.appendChild(_menu);
    return pageContainer;
  };

  return { create };
})();
export default menuPage;
