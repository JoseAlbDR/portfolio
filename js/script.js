const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const bezier = document.querySelector(".hero-text");
const navBar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const nav = document.querySelector(".navbar");
const hero = document.querySelector("#hero");
// Hacker Effect on load
window.addEventListener("load", () => {
  let iterations = 0;
  const event = document.querySelector(".hack");
  const interval = setInterval(() => {
    event.textContent = event.textContent
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations >= event.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  }, 50);
});

// Hacker effect on Moseover
document.querySelector(".hack").onmouseover = (event) => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);
    iterations += 1 / 3;
  }, 50);
};

const showHero = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    bezier.classList.add("bezier");
    bezier.classList.remove("opacity-0");
    // console.log(bezier.style);
  }
};

// Blur effect in Hero Section
const obsHero = new IntersectionObserver(showHero, {
  root: null,
  threshold: 0.5,
});

obsHero.observe(bezier);

// Data type effect
const TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  const that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  const elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute("data-type");
    const period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

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
