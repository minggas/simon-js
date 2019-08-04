window.AudioContext = window.AudioContext || window.webkitAudioContext;

import "../css/style.css";
import "../assets/012_power-512.png";

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

let o = null;
let g = null;

let currentIndex = 0;
let round = 1;
let isRunning = false;
let isStrict = false;
let colorSequence = randomColor(20);
let difficult = "normal";
const difficultMap = {
  normal: 200,
  easy: 400,
  hard: 100,
};

const sound = {
  blue: 329.6,
  red: 261.6,
  yellow: 392.0,
  green: 349.2,
};

const btns = document.querySelectorAll(".btn");
const board = document.getElementById("board");
const menu = document.querySelector(".menu");
const roundScore = document.getElementById("round-score");
const stepScore = document.getElementById("step-score");
const onOffBtn = document.getElementById("onOffBtn");
const difficultSelector = document.querySelectorAll(".difficult");
const strictMode = document.getElementById("strict");

btns.forEach(btn => (btn.disabled = true));
btns.forEach(btn => btn.addEventListener("click", playerTurn));
onOffBtn.addEventListener("click", toggleOnOff);
difficultSelector.forEach(btn =>
  btn.addEventListener("click", selectDifficult),
);

function selectDifficult(event) {
  difficult = event.target.dataset.value;
  document.querySelector("[data-value].active").classList.remove("active");
  event.target.classList.add("active");
}

function padSound(type, x, freq) {
  o = context.createOscillator();
  g = context.createGain();
  o.frequency.value = freq;
  o.connect(g);
  o.type = type;
  g.connect(context.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + x);
  o.stop(1);
}

function playBtn(event) {
  const val = currentIndex
  const btn = document.getElementById(event);
  padSound("sine", 0.8, sound[event]);
  btn.style.backgroundColor = event;
  btn.classList.add("playBtn");
  return new Promise((res, rej) => {
  setTimeout(() => {
    document.getElementById(event).style.backgroundColor = "transparent";
    document.getElementById(event).classList.remove("playBtn"); 
    res(++currentIndex)  
  }, difficultMap[difficult]);
});
  
}
function randomColor(number) {
  let arrColor = [];
  const colorMap = {
    0: "red",
    1: "blue",
    2: "green",
    3: "yellow",
  };
  for (let i = 0; i < number; i++) {
    arrColor.push(colorMap[Math.floor(Math.random() * Math.floor(4))]);
  }
  return arrColor;
}

function playSequence() {
  btns.forEach(btn => btn.removeEventListener("click", playerTurn));
  let i = 0;
  let move = setInterval(function() {
    playBtn(colorSequence[i]);
    i++;
    if (round <= i) {
      clearInterval(move);
      btns.forEach(btn => btn.addEventListener("click", playerTurn));
    }
  }, difficultMap[difficult] * 2);
}

function verifyColor(color) {
  setTimeout(() => {
    if (color !== colorSequence[currentIndex]) {
      if (isStrict) {
        round = 1;
        currentIndex = 0;
        colorSequence = randomColor(20);
      }
      document.body.setAttribute("data-message", "WRONG!!!");
      document.body.classList.add("on");
      setTimeout(() => {
        document.body.classList.remove("on");
        init();
      }, 800);
    } else {
      currentIndex++;
      if (currentIndex >= round) {
        round++;
        document.body.classList.add("on");
        document.body.setAttribute("data-message", `Round ${round}`);
        setTimeout(() => {
          document.body.classList.remove("on");
          init();
        }, 600);
      }
    }
  }, 50);
}

function playerTurn(event) {
  stepScore.innerHTML = currentIndex + 1;
  const color = event.target.id;
  playBtn(color);
  verifyColor(color);
}

function init() {
  currentIndex = 0;
  roundScore.innerHTML = round;
  stepScore.innerHTML = currentIndex;
  setTimeout(() => {
    playSequence();
  }, 100);
}

function toggleOnOff() {
  btns.forEach(btn => (btn.disabled = !btn.disabled));
  difficultSelector.forEach(btn => (btn.disabled = !btn.disabled));
  onOffBtn.classList.toggle("on");
  board.classList.toggle("on");
  menu.classList.toggle("on");
  if (!isRunning) {
    isStrict = strictMode.checked;
    init();
  } else {
    round = 1;
    currentIndex = 0;
    colorSequence = randomColor(20);
    roundScore.innerHTML = null;
    stepScore.innerHTML = null;
  }
  isRunning = !isRunning;
  strictMode.disabled = isRunning;
  difficultSelector.disabled = isRunning;
}
