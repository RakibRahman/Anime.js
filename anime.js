import anime from "./node_modules/animejs/lib/anime.es.js";
const play = document.querySelector("button");
const page = document.querySelector("#page");
const box = document.querySelectorAll(".box");
const jsBox = document.getElementsByClassName("js-box");
const circle = document.querySelector("#circle");
const circle2 = document.querySelector("#circle2");

//html elements animation
const anim = anime({
  targets: jsBox,
  duration: 2000,
  opacity: 0,
  scale: 1.3,
  easing: "linear",
  autoplay: false,
});

const move = anime({
  targets: circle,
  autoplay: false,
  translateX: 100,
  // translateX: ["0rem", "40rem"], //starting point,end point
  // translateX: ["0rem", "+=40rem"],
  duration: 1000,
  easing: "linear",
});

const radius = anime({
  autoplay: false,
  targets: circle2,
  easing: "easeInOutElastic",
  duration: 2000,
  delay: 500,

  translateX: {
    value: 150,
    delay: 1000,
    duration: 3000,
  },
  scale: 0.5,
  borderRadius: "50%",
});
//! object animation
const bar = {
  progress: 0,
  colors: "0%",
};
const meter = anime({
  targets: bar,
  progress: 10,
  colors: "100%",
  round: 1,
  autoplay: false,
  update: () => console.log(bar.progress, bar.colors),
});

const playAnimation = (_) => {
  radius.play();
  meter.play();
  move.play();
  anim.play();
};
play.addEventListener("click", playAnimation);
