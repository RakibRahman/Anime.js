import anime from "./node_modules/animejs/lib/anime.es.js";

const info = document.querySelector("#info");
const roll = document.querySelectorAll(".roll");
const roll2 = document.querySelector(".roll2");
const roll4 = document.querySelector(".roll4");

const pulse = anime({
  targets: info,
  duration: 2000,
  //   translateY: [0, -150],
  scale: [0, 1],
  easing: "easeInOutElastic",
  elasticity: 400,
  loop: true,
  delay: 1000,
});

const rolling = anime({
  direction: "reverse",
  targets: roll,
  rotate: {
    value: 360,
    duration: 1800,
    easing: "easeInOutSine",
  },
  loop: true,
  translateX: 250,
  translateY: {
    value: "+=20",
  },
  easing: "easeInOutSine",
  //   easing: "spring(1, 80, 10, 0)",
  duration: 5000,
});

const mix = anime({
  targets: [roll2, roll4],
  delay: 200,
  borderRadius: "50%",
  opacity: {
    value: [0, 1],
    duration: 500,
  },
  easing: "linear",
  backgroundColor: ["#00ff00", "#f14e0d"],
  loop: true,
});
