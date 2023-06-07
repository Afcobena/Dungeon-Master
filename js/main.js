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
let deltaX;
let deltaY;
let frameRate = 0;

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
  scoreCaseDOM.style.display = "none"
  scoreUpdateDOM.style.display = "none";
  
  restartBtn.style.display = "flex";
  canvas.style.display = "block";

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

// Move on keydown
window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 87:
      game.rogueKnight.image.src = "./src/images/rogue-knight-sprite.png";
      game.rogueKnight.vy = -2.5 * frameRate;
      break;
    case 68:
      game.rogueKnight.image.src = "./src/images/Right-2.png";
      game.rogueKnight.vx = 2.5 * frameRate;
      break;
    case 83:
      game.rogueKnight.image.src = "./src/images//Down-3.png";
      game.rogueKnight.vy = 2.5 * frameRate;
      break;
    case 65:
      game.rogueKnight.image.src = "./src/images/Left-4.png";
      game.rogueKnight.vx = -2.5 * frameRate;
      break;
  }
});

// Stop on keyup
window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 87:
      game.rogueKnight.image.src = "./src/images/rogue-knight-sprite.png";
      game.rogueKnight.vy = 0;
      break;
    case 68:
      game.rogueKnight.image.src = "./src/images/Right-2.png";
      game.rogueKnight.vx = 0;
      break;
    case 83:
      game.rogueKnight.image.src = "./src/images//Down-3.png";
      game.rogueKnight.vy = 0;
      break;
    case 65:
      game.rogueKnight.image.src = "./src/images/Left-4.png";
      game.rogueKnight.vx = 0;
      break;
  }
});




  // Código para disparar la bala hacia la posición del click
/* canvas.addEventListener('click', function(event) {
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;
  const direccionX = x - rogueKnigh.x;
  const direccionY = y - rogueKnigh.y;
  const distancia = Math.sqrt(direccionX * direccionX + direccionY * direccionY);
  const velocidadX = direccionX / distancia * 10;
  const velocidadY = direccionY / distancia * 10;
  const spear = new Spear(rogueKnigh.x, rogueKnigh.y, velocidadX, velocidadY);


  game.spear.push(newSpear)
}); */

canvas.addEventListener("click", (event) => {
  deltaX = event.offsetX - game.rogueKnight.x;
  deltaY = event.offsetY - game.rogueKnight.y;

  let rotation = Math.atan2(deltaX, deltaY);

  let ProjectileVx = Math.sin(rotation) * 6;
  let ProjectileVy = Math.cos(rotation) * 6;
  let newSepar = new Spear(ProjectileVx, ProjectileVy);

  if (deltaX > 0) {
    game.rogueKnight.image.src = "./src/images/rogue-knight-sprite.png";
  } else if (deltaX < 0) {
    game.rogueKnight.image.src = "./src/images/rogue-knight-sprite.png";
  }

  game.spearArr.push(newSepar);
  console.log("clicking")
});