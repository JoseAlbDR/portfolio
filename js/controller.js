import EffectView from "./views/effectView.js";
import { projectItems, menuItems, techItems, aboutItems } from "./model.js";
import projectView from "./views/projectView.js";
import menuView from "./views/menuView.js";
import techsView from "./views/techsView.js";
import aboutView from "./views/aboutView.js";

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

projectView.render(projectItems);
menuView.render(menuItems);
techsView.render(techItems);
aboutView.render(aboutItems);

init();
