import EffectView from "./views/effectView.js";
import { projects, menuItems } from "./model.js";
import projectView from "./views/projectView.js";
import menuView from "./views/menuView.js";

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

projectView.render(projects);
menuView.render(menuItems);
