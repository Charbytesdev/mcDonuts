import "./css/global.css";
import createHomePage from "./home-page";
import createNavBar from "./nav-bar";

document.body.appendChild(createNavBar());
document.body.appendChild(createHomePage());
