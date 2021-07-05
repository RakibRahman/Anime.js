import anime from "./node_modules/animejs/lib/anime.es.js";
const circleAnim = anime({
  targets: ".my-circle",
  r: [10, 50],
  duration: 1000,
  delay: 500,
  autoplay: true,
  loop: true,
});

const ellipseAnim = anime({
  targets: ".my-ellipse",
  ry: [10, 40],
  delay: 500,
  autoplay: false,
});

const rectAnim = anime({
  targets: ".my-rect",
  height: [10, 120],
  width: [10, 100],
  autoplay: false,
  delay: 500,
});

const starAnim = anime({
  targets: ".my-star",
  autoplay: false,
  d: "M 712 382.666 L 735.732605438 414.654186685 L 772.0002535 428.501666695 L 750.40016224 462.118933315 L 749.082195997 502.665333305 L 712 491.45376 L 674.917804003 502.665333305 L 673.59983776 462.118933315 L 651.9997465 428.501666695 L 688.267394562 414.654186685 Z",
  delay: 500,
});

const circleAnim2 = anime({
  targets: ".my-circle2",
  fill: ["#ff6969", "#0792ff"],
  duration: 800,
  delay: 500,
  easing: "linear",
  autoplay: false,
});

const ellipseAnim2 = anime({
  targets: ".my-ellipse2",
  strokeWidth: ["5px", "10px"],
  stroke: ["#000", "#00ff00"],
  easing: "linear",
  duration: 800,
  delay: 500,
  autoplay: false,
});

const rectAnim2 = anime({
  targets: ".my-rect2",
  strokeDasharray: [30, 50],
  easing: "easeInOutSine",
  duration: 1500,
  autoplay: false,
  delay: 500,
});

const starAnim2 = anime({
  targets: ".my-star2",
  autoplay: false,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: 500,
});

const textAnim = anime
  .timeline({
    autoplay: false,
    // loop: true,
  })
  .add({
    targets: ".my-text",
    strokeDasharray: [932, 932],
    strokeDashoffset: [932, 0],
    easing: "easeInOutSine",
    duration: 7000,
    autoplay: false,
  })
  .add({
    targets: ".my-text",
    fill: ["#fff", "#000"],
    duration: 500,
    easing: "linear",
  });

document
  .querySelector("#play-circle")
  .addEventListener("click", circleAnim.restart);
document
  .querySelector("#play-ellipse")
  .addEventListener("click", ellipseAnim.restart);
document
  .querySelector("#play-rect")
  .addEventListener("click", rectAnim.restart);
document
  .querySelector("#play-star")
  .addEventListener("click", starAnim.restart);

document
  .querySelector("#play-circle2")
  .addEventListener("click", circleAnim2.restart);
document
  .querySelector("#play-ellipse2")
  .addEventListener("click", ellipseAnim2.restart);
document
  .querySelector("#play-rect2")
  .addEventListener("click", rectAnim2.restart);
document
  .querySelector("#play-star2")
  .addEventListener("click", starAnim2.restart);

document
  .querySelector("#play-text")
  .addEventListener("click", textAnim.restart);
