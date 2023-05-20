const navBar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const nav = document.querySelector(".navbar");
const hero = document.querySelector("#hero");

import EffectView from "./views/effectView.js";

const init = function () {
  const view = new EffectView();
  view.showRdmLettersOnLoad();
  view.showRdmLettersMouseOver();
  view.showBlur();
  view.showDataType();
  view.showStickyNav();
  view.showActiveMenu();
  view.showActiveMenuScroll();
};

init();
