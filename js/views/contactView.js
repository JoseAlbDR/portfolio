import View from "./View.js";

class ContactView extends View {
  _parentElement = document.querySelector(".status");

  _generateItemMarkup(item) {
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
            alt="${item.alt}"
          />
        </div>
        <div class="text pl-3">
          <p>
            <span>${item.name}</span>
            <a href="${item.href}">${item.content}</a>
          </p>
        </div>
      </div>
    
    `;
  }

  _generateMarkup(data) {
    return `
        <div class="col-md-6 mb-md-0 py-5 px-5 mb-5">
          <h3 class="pb-5 fw-bold">${data.title}</h3>
          <p class="mb-5 fs-5">
            ${data.text}
          </p>
          ${data.items.map((item) => this._generateItemMarkup(item)).join("")}
        </div>
    
    `;
  }
}

export default new ContactView();
