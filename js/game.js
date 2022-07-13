// aqui estará la clase del juego con todos los elementos que afecte el juego

class Game {
  constructor() {
    // todas las propiedades del juego (ej: todas las variables globales de pong)

    // imagen de fondo
    this.dungeon = new Image();
    this.dungeon.src = "./src/images/BG2 pixel art.png";
    this.rogueKnight = new RogueKnight()
    this.zombieRightArr = []
    this.zombieLeftArr = []
    this.zombieDownArr = []
    this.zombieUpArr = []
    this.spearArr = []
    


    this.isGameOn = true;
    // el score (BONUS)
  }

  // .todos los metodos del juego (ej: las funciones que teniamos ayer en el pong)

  // los tubos aleatorios (cuando apareceran ) Spawn


  automaticAddEnemiesRight = () => {
      if (this.zombieRightArr.length === 0 || this.zombieRightArr[this.zombieRightArr.length - 1].x < canvas.height / 4) {
          // 1. si el array está vacio
          // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas
    
          let randomPositionY = Math.random() * (canvas.height + 150 && canvas.height - 150)
    
          let newZombie = new ZombieRight(randomPositionY, "./src/images/zombie-from-right.png")
          this.zombieRightArr.push(newZombie)

    }
  }

  automaticAddEnemiesLeft = () => {
    if (this.zombieLeftArr.length === 0 || this.zombieLeftArr[this.zombieLeftArr.length - 1].x > 600 / 2) {
        // 1. si el array está vacio
        // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas
  
        let randomPositionYUp = Math.random() * (canvas.height + 150 && canvas.height - 150)      
  
        let newZombieLeftUp = new ZombieLeft(randomPositionYUp, "./src/images/zombie-from-left.png")
        this.zombieLeftArr.push(newZombieLeftUp)

  }
}

  automaticAddEnemiesDown = () => {
    if (this.zombieDownArr.length === 0 || this.zombieDownArr[this.zombieDownArr.length - 1].y < canvas.height / 4) {
        // 1. si el array está vacio
        // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas

        let randomPositionXUp = Math.random() *  (canvas.width + 150 && canvas.width - 150) 

        let newZombieDownUp = new ZombieDown(randomPositionXUp, "./src/images/zombie-from-down.png")
        this.zombieDownArr.push(newZombieDownUp)

  }
}

  automaticAddEnemiesUp = () => {
    if (this.zombieUpArr.length === 0 || this.zombieUpArr[this.zombieUpArr.length - 1].y > 600 / 2) {
      // 1. si el array está vacio
      // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas

      let randomPositionXUp = Math.random() * (canvas.width + 190 && canvas.width - 190) 

      let newZombieUpUp = new ZombieUp(randomPositionXUp, "./src/images/zombie-from-up.png")
      this.zombieUpArr.push(newZombieUpUp)

  }
}


//crear disparo condicional para cree uno nuevo en el main con addevent

  throwSpear = () => {
    if (this.spearArr.length === 0 || this.spearArr.length++) {
      
      let newSpear = new Spear("./src/images/spear-image.png")
      this.spearArr.push(newSpear)

  }
  }

  gameOver = () => {
      this.isGameOn = false;
      canvas.style.display = "none"
      gameOverScreenDOM.style.display = "flex"
  }

  rogueKnightEnemyCollision = () => {
      this.zombieRightArr.forEach((eachZombie) => {
          if (eachZombie.x < this.rogueKnight.x + this.rogueKnight.w &&
              eachZombie.x + eachZombie.w > this.rogueKnight.x &&
              eachZombie.y < this.rogueKnight.y + this.rogueKnight.h &&
              eachZombie.h + eachZombie.y > this.rogueKnight.y) {
                  console.log("Braaaiiiinsss")
                  this.gameOver()
              }

      })

      this.zombieLeftArr.forEach((eachZombie) => {
        if (eachZombie.x < this.rogueKnight.x + this.rogueKnight.w &&
            eachZombie.x + eachZombie.w > this.rogueKnight.x &&
            eachZombie.y < this.rogueKnight.y + this.rogueKnight.h &&
            eachZombie.h + eachZombie.y > this.rogueKnight.y) {
                console.log("Braaaiiiinsss")
                this.gameOver()
            }

      })

      this.zombieDownArr.forEach((eachZombie) => {
        if (eachZombie.x < this.rogueKnight.x + this.rogueKnight.w &&
            eachZombie.x + eachZombie.w > this.rogueKnight.x &&
            eachZombie.y < this.rogueKnight.y + this.rogueKnight.h &&
            eachZombie.h + eachZombie.y > this.rogueKnight.y) {
                console.log("Braaaiiiinsss")
                this.gameOver()
            }

      })

      this.zombieUpArr.forEach((eachZombie) => {
        if (eachZombie.x < this.rogueKnight.x + this.rogueKnight.w &&
            eachZombie.x + eachZombie.w > this.rogueKnight.x &&
            eachZombie.y < this.rogueKnight.y + this.rogueKnight.h &&
            eachZombie.h + eachZombie.y > this.rogueKnight.y) {
                console.log("Braaaiiiinsss")
                this.gameOver()
            }

      })


  }

  enemiesSpearCollision = () => {
    this.spearArr.forEach((eachSpear) => {
      if (eachSpear.x < this.zombieUp.x + this.zombieUp.w &&
          eachSpear.x + eachSpear.w > this.zombieUp.x &&
          eachSpear.y < this.zombieUp.y + this.zombieUp.h &&
          eachSpear.h + eachSpear.y > this.zombieUp.y) {
            this.zombieUpArr.forEach((eachZombie) => {
              this.spearArr.forEach((eachSpear) => {
                if (eachZombie.active === true && eachSpear.active === true) {
                  eachZombie.active === false;
                  eachSpear.active === false;
                }

              })
            })
          }
    })
    
    

    this.spearArr.forEach((eachSpear) => {
      if (eachSpear.x < this.zombieRight.x + this.zombieRight.w &&
          eachSpear.x + eachSpear.w > this.zombieRight.x &&
          eachSpear.y < this.zombieRight.y + this.zombieRight.h &&
          eachSpear.h + eachSpear.y > this.zombieRight.y) {
              console.log("Braaaiiiinsss")
              this.gameOver()
          }

    })

    this.spearArr.forEach((eachSpear) => {
      if (eachSpear.x < this.zombieDown.x + this.zombieDown.w &&
          eachSpear.x + eachSpear.w > this.zombieDown.x &&
          eachSpear.y < this.zombieDown.y + this.zombieDown.h &&
          eachSpear.h + eachSpear.y > this.zombieDown.y) {
              console.log("Braaaiiiinsss")
              this.gameOver()
          }

    })

    this.spearArr.forEach((eachSpear) => {
      if (eachSpear.x < this.zombieLeft.x + this.zombieLeft.w &&
          eachSpear.x + eachSpear.w > this.zombieLeft.x &&
          eachSpear.y < this.zombieLeft.y + this.zombieLeft.h &&
          eachSpear.h + eachSpear.y > this.zombieLeft.y) {
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
    
    this.rogueKnight.rogueKnightMoveDown()
    this.rogueKnight.rogueKnightMoveForward()
    this.rogueKnight.rogueKnightMoveLeft()
    this.rogueKnight.rogueKnightMoveRight()

    this.rogueKnightEnemyCollision()

    this.automaticAddEnemiesRight()
    this.automaticAddEnemiesLeft()
    this.automaticAddEnemiesDown()
    this.automaticAddEnemiesUp()

/*     this.spear.throwSpear() */

    this.spearArr.forEach((eachSpear) => {
      eachSpear.spearMove()
    })

    this.zombieRightArr.forEach((eachZombie) => {
      eachZombie.moveZombieRight()
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
    
    this.spearArr.forEach((eachSpear) => {
      eachSpear.drawSpear()
    })

    this.zombieRightArr.forEach((eachZombie) => {
      eachZombie.drawZombieRight()
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

  
}