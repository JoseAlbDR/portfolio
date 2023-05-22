import View from "./View.js";

class FormView extends View {
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
  addHandlerSubmit(handler) {
    console.log(this._parentElement);

    document
      .querySelector(".upload")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const dataArr = [...new FormData(this)];

        const data = Object.fromEntries(dataArr);

        handler(data);
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
              type="text"
              id="${item.id}"
              name="${item.name}"
              class="form-control form-field"
              placeholder="${item.placeholder}"
              required
            />
            <label for="${item.for}" class="form-label mb-5">${item.label}</label>
          </div>
        </div>
        <!--Grid column-->
      </div>
    `;
  }

  _generateContactMarkup(item) {
    return `
    <div class="dbox w-100 d-flex align-items-center mb-5 fs-2">
      <div
        class="icon d-flex align-items-center justify-content-center"
      >
        <img
          src="${item.src}"
          height="35px"
          width="20px"
          class="img-fluid mb-3 me-3"
          alt=""
        />
      </div>
      <div class="text pl-3">
        <p>
          <span>${item.name}</span>
          <a
            href="${item.href}"
            target="_blank"
            >${item.content}</a
          >
        </p>
      </div>
    </div>

    `;
  }

  _generateMarkup() {
    const data = this._data;
    console.log(data);

    return `
      <div class="col-md-6 mb-md-0 py-5 px-5 mb-5 bg-blue">
        <h3 class="pb-5 fw-bold">${data.title}</h3>
        <form id="contact-form" class="form upload">
          <fieldset disabled>
           ${data.items.map((item) => this._generateInputMarkup(item)).join("")}
            
            <!--Grid row-->
            <div class="text-md-left">
              <button class="send btn btn-lg btn-outline-primary boton">
                Enviar
              </button>
            </div>
          </fieldset>
        </form>

        <div class="status"></div>
      </div>
      
    `;
  }
}

export default new FormView();
