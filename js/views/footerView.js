import View from "./View.js";

class FooterView extends View {
  _parentElement = document.querySelector(".footer");

  _generateSocialMarkup(item) {
    return `
      <li class="ms-3">
        <a
          class="text-body-secondary"
          href="${item.href}"
          target="_blank"
          ><img
            src="${item.src}"
            height="30px"
            width="30px"
            class="img-fluid"
            alt=""
        /></a>
      </li>
    `;
  }

  _generateMenuMarkup(item) {
    return `
    <li class="nav-item">
        <a
          href="${item.href}"
          class="nav-link px-2 text-body-secondary hover-underline-animation"
          >${item.name}</a
        >
    `;
  }

  _generateMarkup() {
    return `
    <div class="d-flex border-bottom justify-content-evenly">
      <ul class="nav col-md-4 list-unstyled d-flex mt-2">
        ${this._data[0].social
          .map((element) => this._generateSocialMarkup(element))
          .join("")}
      </ul>

      <ul
        class="nav d-flex justify-content-evenly pb-3 mb-3 align-items-center"
      >
        ${this._data[0].menu
          .map((element) => this._generateMenuMarkup(element))
          .join("")}
      </ul>
    </div>
  <p class="text-center text-body-secondary">${this._data[0].copyright}</p>
  
  `;
  }
}

export default new FooterView();
