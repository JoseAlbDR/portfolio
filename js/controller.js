import EffectView from "./views/effectView.js";
import * as model from "./model.js";
import projectView from "./views/projectView.js";
import menuView from "./views/menuView.js";
import techsView from "./views/techsView.js";
import aboutView from "./views/aboutView.js";
import footerView from "./views/footerView.js";
import formationView from "./views/formationView.js";
import formView from "./views/formView.js";
import { PUBLIC_KEY } from "../private/config.js";

const init = function () {
  const view = new EffectView();
  // view.showRdmLettersOnLoad();
  // view.showRdmLettersMouseOver();
  view.showBlur();
  view.showDataType();
  view.showStickyNav();
  view.showActiveMenu();
  view.showActiveMenuScroll();
  emailjs.init(PUBLIC_KEY);
};

// Render all html from model data
projectView.render(model.projectItems);
menuView.render(model.menuItems);
techsView.render(model.techItems);
aboutView.render(model.aboutItems);
footerView.render(model.footerItems);
formationView.render(model.formationItems);
formView.getData(model.contactWays);
formView.render(model.contactForm);

const controlSubmitForm = function (form) {
  model.submitForm(form);
};

formView.addHandlerSubmit(controlSubmitForm);
init();
