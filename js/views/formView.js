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
  _clearForm() {
    const fields = document.querySelectorAll(".form-field");
    fields.forEach((field) => (field.value = ""));
  }

  /**
   * Event handler for submit form
   */
  addHandlerSubmit(handler) {
    const formClass = this;
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const test = document.getElementById("test");
        if (+test.value === 5) {
          // this.contact_number.value = (Math.random() * 100000) | 0;
          handler(document.getElementById("contact-form"));
          setTimeout(() => {
            formClass._clearForm();
            formClass._successMsg();
          }, 1000);
        } else {
          formClass._clearForm();
          const msg = document.getElementById("fbmessage");
          msg.textContent = "";
          msg.textContent = "Respuesta erronea.";
        }
      });
  }

  /**
   * Displays a success message after submitting the form.
   */
  _successMsg() {
    const msg = document.getElementById("fbmessage");
    msg.textContent = "";
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
        <form id="contact-form" class="form upload" id="contact-form" method="POST">
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
            <div class="row">
              <div class="col-md-12 pb-5">
                <div class="md-form mb-0 form-group filed">
                <input
                  value=""
                  type="number"
                  id="test"
                  name="test"
                  class="form-control form-field"
                  placeholder="3 + 2"
                  required
                  />
                  <label for="test" class="form-label mb-5">
                  3 + 2
                  </label>
                </div>
              </div>
            </div>
            <div class="text-md-left">
              <button class="send btn btn-lg btn-outline-primary boton">
                Enviar
              </button>
              <p id="fbmessage"></p>
            </div>
          </fieldset>
        </form>
      </div>
      ${contactView._generateMarkup(this._contactData)}
    `;
  }
}

export default new FormView();
