import View from "./View.js";

class FormView extends View {
  /**
   * Class representing the view of the form.
   */
  _parentElement = document.querySelector(".upload");

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

    this._parentElement.addEventListener("submit", function (event) {
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
}

export default new FormView();
