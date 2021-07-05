import anime from "./node_modules/animejs/lib/anime.es.js";

const play = document.querySelector("#play");
const restart = document.querySelector("#restart");
const reverse = document.querySelector("#reverse");
const box = document.querySelector(".box");
const circle = document.querySelector(".circle");

const timeline = anime.timeline({
  autoplay: false,
  direction: "normal",
  loop: 1,
  delay: 1000,
  duration: 1500,
  easing: "easeInOutSine",
  begin: () => {
    console.log("Tl start");
  },
  complete: () => {
    console.log("Tl end");
  },
});

const boxAnime = {
  targets: box,
  translateX: [
    { delay: 500, value: "-250px" },
    { value: "150px", easing: "easeInOutSine" },
  ],
  background: "#f14",
  translateY: [
    { delay: 1500, value: "-250px" },
    { value: "150px", easing: "easeInOutSine" },
    { value: "-150px", easing: "easeInOutSine" },
  ],
  begin: () => {
    console.log("box start");
  },
  complete: () => {
    console.log("box end");
  },
};
const circleAnime = {
  targets: circle,
  scale: [0, 0.5],
  easing: "linear",
  border: "5px solid green",
  borderRadius: "50%",
  autoplay: false,
  offset: 500, //play circle animation 500 after box animation
  begin: () => {
    console.log("circle start");
  },
  complete: () => {
    console.log("circle end");
  },
};
timeline.add(boxAnime).add(circleAnime);

play.addEventListener("click", timeline.play);

restart.addEventListener("click", timeline.restart);
reverse.addEventListener("click", () => {
  timeline.play();
  timeline.reverse();
});
