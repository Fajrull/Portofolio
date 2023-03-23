/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import * as boostrap from "bootstrap";
import "../styles/main.scss";
import "regenerator-runtime";
import App from "./views/app";
import ColorMode from "../styles/colormode";

const app = new App({
  button: document.querySelector(".navbar-toggler"),
  drawer: document.querySelector(".navbar"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
