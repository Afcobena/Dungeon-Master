// aqui estará la clase del juego con todos los elementos que afecte el juego

class Game {
  constructor() {
    // todas las propiedades del juego (ej: todas las variables globales de pong)

    // imagen de fondo
    this.dungeon = new Image();
    this.dungeon.src = "./src/images/BG2 pixel art.png";
    this.rogueKnight = new RogueKnight()
    this.pipeArr = []
    this.zombieLeftArr = []
    this.zombieDownArr = []
    this.zombieUpArr = []
    


    this.isGameOn = true;
    // el score (BONUS)
  }

  // .todos los metodos del juego (ej: las funciones que teniamos ayer en el pong)

  // los tubos aleatorios (cuando apareceran ) Spawn
  automaticAddPipes = () => {
      if (this.pipeArr.length === 0 || this.pipeArr[this.pipeArr.length - 1].x < 100 / 4) {
          // 1. si el array está vacio
          // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas
    
          let randomPositionYUp = Math.random() * (canvas.height + 150 && canvas.height - 150) 
    
          let newPipeUp = new Pipe(randomPositionYUp, "./src/images/zombie-from-right.png")
          this.pipeArr.push(newPipeUp)

    }
  }

  automaticAddEnemysLeft = () => {
    if (this.zombieLeftArr.length === 0 || this.zombieLeftArr[this.zombieLeftArr.length - 1].x > 600 / 2) {
        // 1. si el array está vacio
        // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas
  
        let randomPositionYUp = Math.random() * (canvas.height + 150 && canvas.height - 150)      
  
        let newZombieLeftUp = new ZombieLeft(randomPositionYUp, "./src/images/zombie-from-left.png")
        this.zombieLeftArr.push(newZombieLeftUp)

  }
}

  automaticAddEnemysDown = () => {
    if (this.zombieDownArr.length === 0 || this.zombieDownArr[this.zombieDownArr.length - 1].y < 600 / 4) {
        // 1. si el array está vacio
        // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas

        let randomPositionXUp = Math.random() *  (canvas.height + 150 && canvas.width - 150) 

        let newZombieDownUp = new ZombieDown(randomPositionXUp, "./src/images/zombie-from-down.png")
        this.zombieDownArr.push(newZombieDownUp)

  }
}

  automaticAddEnemysUp = () => {
    if (this.zombieUpArr.length === 0 || this.zombieUpArr[this.zombieUpArr.length - 1].y > 600 / 2) {
      // 1. si el array está vacio
      // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas

      let randomPositionXUp = Math.random() * (canvas.width + 190 && canvas.width - 190) 

      let newZombieUpUp = new ZombieUp(randomPositionXUp, "./src/images/zombie arriba.png")
      this.zombieUpArr.push(newZombieUpUp)

  }
}

  gameOver = () => {
      this.isGameOn = false;
      canvas.style.display = "none"
      gameOverScreenDOM.style.display = "flex"
  }

  rogueKnightEnemyCollision = () => {
      this.pipeArr.forEach((eachPipe) => {
          if (eachPipe.x < this.rogueKnigh.x + this.rogueKnigh.w &&
              eachPipe.x + eachPipe.w > this.rogueKnigh.x &&
              eachPipe.y < this.rogueKnigh.y + this.rogueKnigh.h &&
              eachPipe.h + eachPipe.y > this.rogueKnigh.y) {
                  console.log("Braaaiiiinsss")
                  this.gameOver()
              }

      })
  }


  gameLoop = () => {
    // console.log("juego andando");
    // 1. Limpiamos el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Movimientos y acciones de los elementos
    
    /* this.pollitoFloorCollision() */
    this.rogueKnightEnemyCollision

    this.automaticAddPipes()
    this.automaticAddEnemysLeft()
    this.automaticAddEnemysDown()
    this.automaticAddEnemysUp()

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.pipeMovement()
    })

    this.zombieLeftArr.forEach((eachZombie) => {
      eachZombie.moveZombieLeft()
    })

    this.zombieDownArr.forEach((eachZombie) => {
      eachZombie.moveZombieDown()
    })

    this.zombieUpArr.forEach((eachZombie) => {
      eachZombie.moveZombieUp()
    })

    // 3. Dibujar los elementos

    ctx.drawImage(this.dungeon, 0, 0, canvas.width, canvas.height);

    this.rogueKnight.drawRogueKnight();

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe()
    })

    this.zombieLeftArr.forEach((eachZombie) => {
      eachZombie.drawZombieLeft()
    })

    this.zombieDownArr.forEach((eachZombie) => {
      eachZombie.drawZombieDown()
    })

    this.zombieUpArr.forEach((eachZombie) => {
      eachZombie.drawZombieUp()
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