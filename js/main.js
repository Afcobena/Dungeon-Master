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

// addeventlistener para manejar el pollo.
window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    console.log("presiona barra espaciadora")
    game.pollito.pollitoJump()
  }
})