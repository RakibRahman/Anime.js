import anime from "./node_modules/animejs/lib/anime.es.js";

const play = document.querySelector("#play");
const restart = document.querySelector("#restart");
const reverse = document.querySelector("#reverse");
const pause = document.querySelector("#pause");
const box = document.querySelector(".box");
const info = document.querySelector(".info");

const playAnime = anime({
  targets: box,
  rotate: 360,
  easing: "linear",
  duration: 3000,
  autoplay: false,
  loop: 6,
  scale: [0, 1],
  direction: "reverse",
});

play.addEventListener("click", playAnime.play);
pause.addEventListener("click", playAnime.pause);
restart.addEventListener("click", playAnime.restart);
reverse.addEventListener("click", () => {
  playAnime.play();
  playAnime.reverse();
});
