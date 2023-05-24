import EffectView from "./views/effectView.js";
import * as model from "./model.js";
import projectView from "./views/projectView.js";
import menuView from "./views/menuView.js";
import techsView from "./views/techsView.js";
import aboutView from "./views/aboutView.js";
import footerView from "./views/footerView.js";
import formationView from "./views/formationView.js";
import formView from "./views/formView.js";

const init = function () {
  const view = new EffectView();
  // view.showRdmLettersOnLoad();
  // view.showRdmLettersMouseOver();
  view.showBlur();
  view.showDataType();
  view.showStickyNav();
  view.showActiveMenu();
  view.showActiveMenuScroll();
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

const controlSubmitForm = async function (formData) {
  try {
    await model.submitForm(formData);

    formView.clearForm();
    formView.successMsg();
  } catch (error) {
    console.error(error);
    formView.errorMsg(error);
  }
};

formView.addHandlerSubmit(controlSubmitForm);
init();
