import { CATCHA } from "../../private/config.js";
import View from "./View.js";
import contactView from "./contactView.js";

class FormView extends View {
  _contactData;
  /**
   * Class representing the view of the form.
   */
  _parentElement = document.querySelector(".form-parent");

  /**
   * Clears the form fields by setting their values to empty.
   */
  clearForm() {
    const fields = document.querySelectorAll(".form-field");
    fields.forEach((field) => (field.value = ""));
  }

  /**
   * Adds a submit event handler to the form element.
   * @param {Function} handler - The handler function to be called on form submission.
   */
  submitForm() {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(this);
        // this.contact_number.value = (Math.random() * 100000) | 0;
        emailjs.sendForm("service_pm9chgb", "contact_form", this).then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
        // const dataArr = [...new FormData(this)];
        // const data = Object.fromEntries(dataArr);
      });
  }

  /**
   * Displays a success message after submitting the form.
   */
  successMsg() {
    const btn = document.querySelector(".send");
    btn.insertAdjacentHTML("afterend", "<p>Gracias por enviar tu mensaje.</p>");
  }

  _generateInputMarkup(item) {
    return `
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-md-12 pb-5">
          <div class="md-form mb-0 form-group filed">
            <input
              value=""
              type="${item.name === "email" ? "email" : "text"}"
              id="${item.id}"
              name="${item.name}"
              class="form-control form-field"
              placeholder="${item.placeholder}"
              required
            />
            <label for="${item.for}" class="form-label mb-5">${
      item.label
    }</label>
          </div>
        </div>
        <!--Grid column-->
      </div>
    `;
  }

  getData(data) {
    this._contactData = data;
  }

  _generateMarkup() {
    const data = this._data;

    return `
      <div class="col-md-6 mb-md-0 py-5 px-5 mb-5 bg-blue">
        <h3 class="pb-5 fw-bold">${data.title}</h3>
        <form id="contact-form" class="form upload" id="contact-form method="POST">
          <fieldset>
          <imput type="hidden" name="contact_number">
           ${data.items.map((item) => this._generateInputMarkup(item)).join("")}
            
            <!--Grid row-->
            <div class="row">
              <div class="col-md-12 pb-5">
                <div class="md-form mb-0 form-group filed">
                  <textarea placeholder="Mensaje" rows="8" id="message" class="form-control form-field" name="message"></textarea>
                  <label for="message" class="form-label mb-5">
                  Mensaje
                  </label>
                </div>
              </div>
            </div>
            <div class="g-recaptcha" data-sitekey="${CATCHA}"></div>
            <div class="text-md-left">
              <button class="send btn btn-lg btn-outline-primary boton">
                Enviar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      ${contactView._generateMarkup(this._contactData)}
    `;
  }
}

export default new FormView();
