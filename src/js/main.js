import "../css/style.css";

const gameValues = {
  round: 1,
  currentIndex: 0,
  isRunning: false,
  isStrict: false,
  colorSequence: randomColor(20),
  difficult: "normal",
  difficultMap: {
    normal: 300,
    easy: 400,
    hard: 150
  },
  sound: {
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
  }
};

const btns = document.querySelectorAll(".btn");
const board = document.getElementById("board");
const menu = document.querySelector(".menu");
const roundScore = document.getElementById("round-score");
const stepScore = document.getElementById("step-score");
const onOffBtn = document.getElementById("onOffBtn");
const difficult = document.querySelectorAll(".difficult");
const strictMode = document.getElementById("strict");

btns.forEach(btn => btn.addEventListener("click", playerTurn));
onOffBtn.addEventListener("click", toggleOnOff);
difficult.forEach(btn => btn.addEventListener("click", selectDifficult));

function selectDifficult(event) {
  gameValues.difficult = event.target.dataset.value;
  document.querySelector("[data-value].active").classList.remove("active");
  event.target.classList.add("active");
}

function playBtn(event, turn) {
  const btn = document.getElementById(event);
  gameValues.sound[event].currentTime = 0;
  gameValues.sound[event].play();
  btn.style.backgroundColor = event;
  btn.classList.add("playBtn");
  setTimeout(() => {     
    document.getElementById(event).style.backgroundColor = "transparent";
    document.getElementById(event).classList.remove("playBtn");
    if(turn === 'player'){
      verifyColor(event);
    }
  }, gameValues.difficultMap[gameValues.difficult]);
    
}
function randomColor(number) {
  let arrColor = [];
  const colorMap = {
    0: "red",
    1: "blue",
    2: "green",
    3: "yellow"
  };
  for (let i = 0; i < number; i++) {
    arrColor.push(colorMap[Math.floor(Math.random() * Math.floor(4))]);
  }
  return arrColor;
}

function playSequence() {
  let i = 0;
  let move = setInterval(function() {
    playBtn(gameValues.colorSequence[i], 'machine');
    i++;
    if (gameValues.round <= i) {
      clearInterval(move);     
    }
  }, gameValues.difficultMap[gameValues.difficult] * 2);
  
}


function verifyColor(color) {

    if (color !== gameValues.colorSequence[gameValues.currentIndex]) {
      if (gameValues.isStrict) {
        gameValues.round = 1;
        gameValues.currentIndex = 0;
        gameValues.colorSequence = randomColor(20);
      }
      alert('WRONG');
      return init();
      
    }
    gameValues.currentIndex++;
    if (gameValues.currentIndex >= gameValues.round) {
      gameValues.round++;
      alert('next')
      init();   
    }
    roundScore.innerHTML = gameValues.round;
    stepScore.innerHTML = gameValues.currentIndex;
 
}

function playerTurn(event) {
  const color = event.target.id;
  playBtn(color, 'player');  
}

function init() {
  gameValues.currentIndex = 0;
  roundScore.innerHTML = gameValues.round;
  stepScore.innerHTML = gameValues.currentIndex;
  playSequence();
}

function toggleOnOff() {
  btns.forEach(btn => (btn.disabled = !btn.disabled));
  difficult.forEach(btn => (btn.disabled = !btn.disabled));
  onOffBtn.classList.toggle("on");
  board.classList.toggle("on");
  menu.classList.toggle("on");
  if (!gameValues.isRunning) {
    gameValues.isStrict = strictMode.checked;
    strictMode.disabled = true;
    difficult.disabled = true;
    init();
  } else {
    gameValues.round = 1;
    gameValues.currentIndex = 0;
    gameValues.colorSequence = randomColor(20);
    roundScore.innerHTML = null;
    stepScore.innerHTML = null;
  }
  gameValues.isRunning = !gameValues.isRunning;
  strictMode.disabled = gameValues.isRunning;
  difficult.disabled = gameValues.isRunning;
}
