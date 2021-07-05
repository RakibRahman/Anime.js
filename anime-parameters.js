import anime from "./node_modules/animejs/lib/anime.es.js";

const play = document.querySelector("#play");
const box = document.querySelector(".box");

const animation = anime({
  autoplay: false,
  targets: box,
  scale: 2,
  easing: "easeInOutSine",
  duration: 1000,
  borderRadius: "10%",
  border: "3px solid #0000FF",
  //parameters
  //   direction: "reverse",
  //   direction: "normal",
  direction: "alternate",
  loop: 6,
});
play.addEventListener("click", animation.play);
