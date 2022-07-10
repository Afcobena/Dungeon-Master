// aqui estará la clase del juego con todos los elementos que afecte el juego

class Game {
  constructor() {
    // todas las propiedades del juego (ej: todas las variables globales de pong)

    // imagen de fondo
    this.dungeon = new Image();
    this.dungeon.src = "./src/images/bg2.png";
    this.pollito = new Pollito()
    this.pipeArr = []
    this.zombieLeftArr = []
    this.zombieDownArr = []

    this.zombieUp = new ZombieUp()

    this.isGameOn = true;
    // el score (BONUS)
  }

  // .todos los metodos del juego (ej: las funciones que teniamos ayer en el pong)

  // los tubos aleatorios (cuando apareceran ) Spawn
  automaticAddPipes = () => {
      if (this.pipeArr.length === 0 || this.pipeArr[this.pipeArr.length - 1].x < canvas.width / 8) {
          // 1. si el array está vacio
          // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas
    
          let randomPositionYUp = Math.random() * 200
    
          let newPipeUp = new Pipe(randomPositionYUp, "./src/images/zombie-from-right.png")
          this.pipeArr.push(newPipeUp)
    
          let distanceBetweenPipes = newPipeUp.h + 100
          let randomPositionYDown = randomPositionYUp + distanceBetweenPipes
    
          let newPipeDown = new Pipe(randomPositionYDown, "./src/images/zombie-from-right.png")
          this.pipeArr.push(newPipeDown)

    }
  }

  automaticAddEnemysLeft = () => {
    if (this.zombieLeftArr.length === 0 || this.zombieLeftArr[this.zombieLeftArr.length - 1].x < 0 / 2) {
        // 1. si el array está vacio
        // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas
  
        let randomPositionYUp = Math.random() * 300      
  
        let newZombieLeftUp = new ZombieLeft(randomPositionYUp, "./src/images/zombie-from-left.png")
        this.zombieLeftArr.push(newZombieLeftUp)
  
        let distanceBetweenZombies = newZombieLeftUp.h + 100
        let randomPositionYDown = randomPositionYUp + distanceBetweenZombies
  
        let newZombieLeftDown = new ZombieLeft(randomPositionYDown, "./src/images/zombie-from-left.png")
        this.zombieLeftArr.push(newZombieLeftDown)

  }
}

automaticAddEnemysDown = () => {
  if (this.zombieDownArr.length === 0 || this.zombieDownArr[this.zombieDownArr.length - 1].x < canvas.width / 2) {
      // 1. si el array está vacio
      // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas

      let randomPositionYUp = Math.random() * 800

      let newZombieDownUp = new ZombieDown(randomPositionYUp, "./src/images/zombie-from-down.png")
      this.zombieDownArr.push(newZombieDownUp)

      let distanceBetweenZombies = newZombieDownUp.h + 400
      let randomPositionYDown = randomPositionYUp + distanceBetweenZombies

      let newZombieDownDown = new ZombieDown(randomPositionYDown, "./src/images/zombie-from-down.png")
      this.zombieDownArr.push(newZombieDownDown)

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
    
    this.pollitoFloorCollision()
    this.pollitoPipeCollision()
    this.zombieUp.moveZombieUp()
    /* this.zombieDown.moveZombieDown() */
    /* this.zombieLeft.moveZombieLeft() */

    this.automaticAddPipes()
    this.automaticAddEnemysLeft()
    this.automaticAddEnemysDown()

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.pipeMovement()
    })

    this.zombieLeftArr.forEach((eachZombie) => {
      eachZombie.moveZombieLeft()
    })

    this.zombieDownArr.forEach((eachZombie) => {
      eachZombie.moveZombieDown()
    })

    // 3. Dibujar los elementos

    ctx.drawImage(this.dungeon, 0, 0, canvas.width, canvas.height);
    this.pollito.drawPollito()

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe()
    })

    this.zombieLeftArr.forEach((eachZombie) => {
      eachZombie.drawZombieLeft()
    })

    this.zombieDownArr.forEach((eachZombie) => {
      eachZombie.drawZombieDown()
    })

    this.zombieUp.drawZombieUp()
    /* this.zombieDown.drawZombieDown() */
    /* this.zombieLeft.drawZombieLeft() */

    // 4. Efecto de recursión
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  
  // colision pollo tube
  
  // efecto de gameover
  

  // boton de Pausa (MEGA BONUS)
}