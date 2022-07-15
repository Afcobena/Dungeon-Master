// * GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// elementos de DOM

const introScreenDOM = document.querySelector("#intro-screen");
const startBtn = document.querySelector(".start-btn");
const gameOverScreenDOM = document.querySelector("#gameover-screen")
const restartBtn = document.querySelector("#restart-btn")
const scoreCaseDOM = document.querySelector("#score")
const scoreUpdateDOM = document.querySelector(".score-value")
/* const pauseBtn = document.querySelectorAll("#pause-btn") */
const gameScreenDOM = document.querySelectorAll("#game-screen")

// variables globales del juego
let game; 

//gameMusic

const gameAudio = new Audio("./src/audio/jeremy-soule-dragonbornNEW.mp3")
gameAudio.volume = 0.1;
gameAudio.preload = "auto"
gameAudio.load()

const trapAudio = new Audio("./src/audio/sword-start.mp3")
trapAudio.volume = 0.1;
trapAudio.preload = "auto";
trapAudio.load()


// * STATE MANAGEMENT FUNCTIONS

  



const startGame = () => {
  introScreenDOM.style.display = "none";
  gameOverScreenDOM.style.display = "none";
  
  
  restartBtn.style.display = "flex";
  canvas.style.display = "block";
/*   scoreUpdateDOM.style.display = "none";
/*   healthBarDOM.innerHTML = 3; */

  gameAudio.load()
  trapAudio.load()
  gameAudio.play()
  trapAudio.play()

  game = new Game()
  game.gameLoop()
};

/* const pauseGame = () => {
  if(game.isGamePaused === false) {
    game.isGamePaused = true
  }
  else {
    game.isGamePaused = false
    game.gameLoop()
  }
} */


// * ADD EVENT LISTENERS


startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
/* pauseBtn.addEventListener("click", pauseGame); */

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    game.rogueKnight.teclasPress.ArrowLeft = true;
  } 
  if (event.code === "KeyD" || event.code === "ArrowRight") {
    game.rogueKnight.teclasPress.ArrowRight = true;
  } 
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    game.rogueKnight.teclasPress.ArrowUp = true; 
  } 
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    game.rogueKnight.teclasPress.ArrowDown = true; 
  }
})

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    game.rogueKnight.teclasPress.ArrowLeft = false;
  } 
  if (event.code === "KeyD" || event.code === "ArrowRight") {
    game.rogueKnight.teclasPress.ArrowRight = false;
  } 
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    game.rogueKnight.teclasPress.ArrowUp = false; 
  } 
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    game.rogueKnight.teclasPress.ArrowDown = false; 
  }
})

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyJ" || event.code === "KeyG") {
    game.throwSpear();
  }
})