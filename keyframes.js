import anime from "./node_modules/animejs/lib/anime.es.js";

const play1 = document.querySelector("#play1");
const play2 = document.querySelector("#play2");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

const playAnime = anime({
  targets: box1,
  rotate: 360,
  easing: "linear",
  duration: 1000,
  autoplay: false,
  loop: 6,
  scale: [{ value: 1.2 }, { value: -1.1 }, { value: 0.5 }, { value: 2 }],
  translateX: [{ value: -100 }, { value: 100 }],
  direction: "reverse",
});
const playAnime2 = anime({
  targets: box2,
  easing: "linear",
  duration: 3000,
  autoplay: false,
  loop: 2,
  translateX: [{ value: "+=100" }, { value: "+=0" }],
  translateY: [{ value: "+=0" }, { value: "+=100" }],
  direction: "reverse",
});

play1.addEventListener("click", playAnime.play);
play2.addEventListener("click", playAnime2.play);
