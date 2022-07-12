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
/* window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {

    game.rogueKnight.allMovesKeyDown();
  } 
  if (event.code === "ArrowRight") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveRight();

  } 
  if (event.code === "ArrowUp") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveForward(); 

  } 
  if (event.code === "ArrowDown") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveDown(); 
  }


}) */


/* window.addEventListener("keyup", (event) => {
  game.rogueKnight.allMovesKeyUp()
}) */ 

/* window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyW":
      game.rogueKnight.rogueKnightMoveForward();
      break;
    case "KeyD":
      game.rogueKnight.rogueKnightMoveRight();
      break;
    case "KeyS":
        game.rogueKnight.rogueKnightMoveDown(); 
      break;
    case "KeyA":
        game.rogueKnight.rogueKnightMoveLeft();
      break;
  }

}) */


/* allMovesKeyDown = (e) => {
  if(e.keyCode == 39) key.right = false;
  if(e.keyCode == 37) key.left = false;
  if(e.keyCode == 38) key.up = false;
  if(e.keyCode == 40) key.down = false;
} */

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    game.rogueKnight.teclasPress.ArrowLeft = true;
    //modeficar los buleanos a verdadero
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

//cambiar el keyup a falso


window.addEventListener("keyup", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    game.rogueKnight.teclasPress.ArrowLeft = false;
    //modeficar los buleanos a verdadero
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


/* window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    // aqui muevo al Champion a la izquierda
    game.rogueKnight.rogueKnightMoveLeft();
    //modeficar los buleanos a verdadero
  } 
  if (event.code === "KeyD" || event.code === "ArrowRight") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveRight();

  } 
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveForward(); 

  } 
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    // aqui muevo al Champion a la derecha
    game.rogueKnight.rogueKnightMoveDown(); 
  }


}) */




