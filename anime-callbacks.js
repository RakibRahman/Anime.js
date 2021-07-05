import anime from "./node_modules/animejs/lib/anime.es.js";

const play = document.querySelector("#play");
const box = document.querySelector(".box");
const info = document.querySelector(".info");
const animation = anime({
  autoplay: false,
  targets: box,
  scale: 1.2,
  duration: 1000,
  delay: 1000,
  easing: "linear",
  direction: "alternate",
  //callbacks
  begin: () => {
    info.innerHTML = "animation played,after delay";
  },
  complete: () => {
    info.innerHTML = "animation ended";
    anime({
      targets: box,
      translateX: 100,
      direction: "reverse",
      scale: "+=0", //maintain scale value
    });
  },
  update: () => {
    // console.log("updated on every frame");
  },
  run: () => {
    console.log("Run after delay,every frame");
  },
});
play.addEventListener("click", animation.play);
