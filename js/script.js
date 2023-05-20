const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const bezier = document.querySelector(".hero-text");

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
    console.log(bezier.style);
  }
};

const obsHero = new IntersectionObserver(showHero, {
  root: null,
  threshold: 0.5,
});

obsHero.observe(bezier);
