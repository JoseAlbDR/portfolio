const navBar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const nav = document.querySelector(".navbar");
const hero = document.querySelector("#hero");

import EffectView from "./views/effectView.js";

const view = new EffectView();
view.showRdmLettersOnLoad();
view.showRdmLettersMouseOver();
view.showBlur();
view.showDataType();

// Data type effect

// Navheight

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 1,
  rootMargin: `+${navHeight}px`,
});

headerObserver.observe(hero);

nav.addEventListener("click", function (event) {
  event.target.classList.add("active");
  event.target.classList.add("underline");
  const siblings = document.querySelectorAll(".nav-link");
  siblings.forEach((sib) => {
    if (event.target === sib) return;
    sib.classList.remove("active");
    sib.classList.remove("underline");
  });
});
