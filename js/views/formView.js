import View from "./View.js";

class FormView extends View {
  _parentElement = document.querySelector(".upload");

  clearForm() {
    const fields = document.querySelectorAll(".form-field");
    fields.forEach((field) => (field.value = ""));
  }

  addHandlerSubmit(handler) {
    console.log(this._parentElement);

    this._parentElement.addEventListener("submit", function (event) {
      event.preventDefault();

      const dataArr = [...new FormData(this)];

      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  }

  successMsg() {
    const btn = document.querySelector(".send");
    btn.insertAdjacentHTML("afterend", "<p>Gracias por enviar tu mensaje.</p>");
  }
}

export default new FormView();
