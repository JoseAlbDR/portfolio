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
// formView.submitForm();
// const controlSubmitForm = function (formData) {
//   model.submitForm(formData);
//   formView.clearForm();
//   formView.successMsg();
// };

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    // this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm("service_pm9chgb", "contact_form", this).then(
      function () {
        console.log("SUCCESS!");
        formView.clearForm();
        formView.successMsg();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });

// formView.addHandlerSubmit(controlSubmitForm);
init();
