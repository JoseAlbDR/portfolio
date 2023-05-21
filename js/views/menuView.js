import View from "./View.js";

class MenuView extends View {
  _parentElement = document.querySelector(".navbar-nav");

  _generateElementMarkup(element) {
    return `
    <li class="nav-item">
      <a
        class="nav-link active underline hover-underline-animation"
        aria-current="page"
        href="${element.href}"
        >${element.name}</a
      >
    </li>
  
  `;
  }
}

export default new MenuView();
