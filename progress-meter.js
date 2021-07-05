import anime from "./node_modules/animejs/lib/anime.es.js";

const meter = document.querySelector("#progress__meter");
const dl = document.querySelector(".progress__dl");
const percent = document.querySelector(".progress__percent");

const progressBar = anime({
  autoplay: false,
  easing: "linear",
  duration: 2000,

  targets: meter,
  value: [0, 100],
});
const percentage = anime({
  targets: percent,
  value: ["0%", "100%"],
  autoplay: false,
  duration: 2000,
  round: true,
  easing: "easeInOutSine",
});
// dl.addEventListener("click", progressBar.play);
// dl.addEventListener("click", percentage.play);

dl.addEventListener("click", (_) => {
  [percentage, progressBar].forEach((anim) => {
    anim.play();
  });
});
