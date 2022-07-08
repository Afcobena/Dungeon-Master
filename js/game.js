// aqui estará la clase del juego con todos los elementos que afecte el juego

class Game {
    constructor() {
      // todas las propiedades del juego (ej: todas las variables globales de pong)
  
      // imagen de fondo
      this.dungeon = new Image();
      this.dungeon.src = "./src/images/bg2.png";
      // el pollo (y todas sus propiedades)
      this.pollito = new Pollito() // aqui creo un nuevo OBJ de la clase Pollito
      // this.pipe = new Pipe()
      this.pipeArr = []
      // los tubos (y todas sus propiedades)
      // velocidad de los elementos
  
      this.isGameOn = true;
      // el score (BONUS)
    }
  
    // .todos los metodos del juego (ej: las funciones que teniamos ayer en el pong)
  
    // los tubos aleatorios (cuando apareceran ) Spawn
    automaticAddPipes = () => {
      if (this.pipeArr.length === 0 || this.pipeArr[this.pipeArr.length - 1].x < canvas.width / 2) {
        // 1. si el array está vacio
        // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas
  
        let randomPositionYUp = Math.random() * -200
  
        let newPipeUp = new Pipe(randomPositionYUp, "./src/images/zombie arriba.png")
        this.pipeArr.push(newPipeUp)
  
        let distanceBetweenPipes = newPipeUp.h + 100
        let randomPositionYDown = randomPositionYUp + distanceBetweenPipes
  
        let newPipeDown = new Pipe(randomPositionYDown, "./src/images/zombie arriba.png")
        this.pipeArr.push(newPipeDown)
  
      }
    }

    gameOver = () => {
        this.isGameOn = false;
        canvas.style.display = "none"
        gameOverScreenDOM.style.display = "flex"
    }

    pollitoPipeCollision = () => {
        this.pipeArr.forEach((eachPipe) => {
            if (eachPipe.x < this.pollito.x + this.pollito.w &&
                eachPipe.x + eachPipe.w > this.pollito.x &&
                eachPipe.y < this.pollito.y + this.pollito.h &&
                eachPipe.h + eachPipe.y > this.pollito.y) {
                    console.log("se estampó")
                    this.gameOver()
                }

        })
    }
  
  
    pollitoFloorCollision = () => {
      if (this.pollito.y + this.pollito.h > canvas.height) {
        console.log("El pollito llegó al suelo")
        // ok, el juego se termina. isGameOn = false
        this.gameOver()
      }
    }
  
    gameLoop = () => {
      // console.log("juego andando");
      // 1. Limpiamos el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // 2. Movimientos y acciones de los elementos
      this.pollito.pollitoGravity()
      this.pollitoFloorCollision()
      this.pollitoPipeCollision()
      // let collitionCheck = this.pollito.pollitoFloorCollision()
      // if (collitionCheck === true) {
      //   this.isGameOn = false
      // }
      // this.isGameOn = this.pollito.pollitoFloorCollision()
      this.automaticAddPipes()
      // this.pipeArr.pipeMovement()
      this.pipeArr.forEach((eachPipe) => {
        eachPipe.pipeMovement()
      })
  
      // 3. Dibujar los elementos
      ctx.drawImage(this.dungeon, 0, 0, canvas.width, canvas.height);
      this.pollito.drawPollito()
      // this.pipe.drawPipe()
      this.pipeArr.forEach((eachPipe) => {
        eachPipe.drawPipe()
      })
  
      // 4. Efecto de recursión
      if (this.isGameOn === true) {
        requestAnimationFrame(this.gameLoop);
      }
    };
  
    
    // colision pollo tube
    
    // efecto de gameover
    
  
    // boton de Pausa (MEGA BONUS)
  }