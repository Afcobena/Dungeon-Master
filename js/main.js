// Main solo será para manejo de estados y manipulacion de DOM
// * GLOBAL VARIABLES

// seccion de canvas y ctx
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// elementos de DOM
const splashScreenDOM = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreenDOM = document.querySelector("#gameover-screen")
const restartBtn = document.querySelector("#restart-btn")

// variables globales del juego
let game; // creo el juego de manera global para que todo mi codigo lo pueda acceder

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("intentando inicar el juego");
  splashScreenDOM.style.display = "none";
  gameOverScreenDOM.style.display = "none";

  restartBtn.style.display = "none";
  canvas.style.display = "block";

  // ... aqui es donde deberia iniciar el juego.
  game = new Game()
  console.log(game)
  game.gameLoop()
};

// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame)

// addeventlistener para manejar al Champion.
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    // aqui muevo al Champion a la izquierda
    game.rogueKnight.rogueKnightMoveLeft();
  } else if (event.code === "KeyD" || event.code === "ArrowRight") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveRight();

  } else if (event.code === "KeyW" || event.code === "ArrowUp") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveForward(); 
  } else if (event.code === "KeyS" || event.code === "ArrowDown") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveDown(); 
  }

})
document.onkeydown = function(event) {
  if(event == null) {
      teclap = window.event.keycode;
  } else {
      tecla = event.keycode;

  } switch(teclap) {
      case 40:
          enemyY = enemyY + 10;
          indiceY = 0;
      break;
      case 37:
          enemyX = enemyX - 10;
          indiceY = - 1;
      break;
      case 38:
          enemyY = enemyY - 10;
          indiceY = - 2;
      break;
      case 39:
          enemyX = enemyX + 10;
          indiceY = - 3;
      break;
      default:
          break;
  }
}
