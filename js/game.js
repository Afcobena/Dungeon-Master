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
    this.frameCounter = 0;
    this.score = 0;
    this.audio = new Audio("./src/audio/jeremy-soule-dragonborn.mp3")
 /*    this.healthBar = new HealthBar();
    this.health = 100;
    this.healthBarWidth = 200;
    this.healthBarHeight = 30; */



    
    


    this.isGameOn = true;

  }

/*   health = () => {

  } */

  /* function this.audio con el play, volumen{
    
  } */

  playMusic = () => {
    this.audio.src = ("./src/audio/jeremy-soule-dragonborn.mp3")
    this.audio.volume = 1

  }




  scoreUpdate = () => {
    if(this.frameCounter % 60 === 0 && this.frameCounter !== 0) {
      this.score += 1;

      scoreUpdateDOM.innerText = this.score;
    }
    else if(this.frameCounter === 0) {
      this.score = 0;
      scoreUpdateDOM.innerText = this.score;
    }      
  }
  
  
  

  


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

        this.zombieLeftArr.forEach((eachZombie) => {
          if(eachZombie.x > this.rogueKnight.x) {
            eachZombie.directionX = -1
          }
          else if(eachZombie.x < this.rogueKnight.x) {
            eachZombie.directionX = 1
          }
        })

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

//crear variable frame count = 0 farmecount ++ 
/* this.NamedNodeMap. 1/60 */

//--------------------------------------------FUNCIÓN POR TERMINAR-------------------
/*   enemyFollow = () => {
    this.zombieLeftArr.forEach((eachZombie) => {
      if(eachZombie.x > this.rogueKnight.x) {
        eachZombie.x = -1
      } else if(eachZombie.x < this.rogueKnight.x) {
        eachZombie.x = +1
      }
    }) 
  } */
//--------------------------------------------FUNCIÓN POR TERMINAR-------------------
  throwSpear = () => {
    

      //como haria para que la x y la x fueran del personaje
      let positionX = this.rogueKnight.x
      let positionY = this.rogueKnight.y

      
      let newSpear = new Spear(positionX, positionY, "./src/images/spear/spear-image-left.png")
      //condicional y la direccion del spear tiene que estar en game y pasar a la clase
      // a donde esta viendo el usario
      this.spearArr.push(newSpear)
      // crear un nuevo elemento y meterlo en el array

  
  }

  gameOver = () => {
      this.isGameOn = false;
      canvas.style.display = "none"
      gameOverScreenDOM.style.display = "flex"
  }
//--------------------------------------------FUNCIÓN POR TERMINAR-------------------
  rogueKnightWallCollision = () => {
    if(this.rogueKnight.x + this.rogueKnight.w > canvas.width) {
      this.rogueKnight.x =canvas.width - this.rogueKnight.w
      console.log("Right Wall")

    }

    else if (this.rogueKnight.y + this.rogueKnight.h > canvas.height) {
      this.rogueKnight.y =canvas.height - this.rogueKnight.h
      console.log("Down Wall")

    }
    else if (this.rogueKnight.x < 0) {
      this.rogueKnight.x = 0
    }
    else if (this.rogueKnight.y < 0) {
      this.rogueKnight.y = 0
    }
  }


  rogueKnightEnemyCollision = () => {
      this.zombieRightArr.forEach((eachZombie, index) => {
          if (eachZombie.x < this.rogueKnight.x + this.rogueKnight.w &&
              eachZombie.x + eachZombie.w > this.rogueKnight.x &&
              eachZombie.y < this.rogueKnight.y + this.rogueKnight.h &&
              eachZombie.h + eachZombie.y > this.rogueKnight.y) {
                  console.log("Braaaiiiinsss")
                  
              }
              /* if (this.rogueKnight.lifes > 0) {
                this.rogueKnight.lifes = this.rogueKnight.lifes -1
                healthBarDOM.innerHTML = Number(healthBarDOM.innerHTML) -1
              } else if(this.rogueKnight.lifes === 0) {
                this.gameOver()
              }
              this.zombieRightArr.splice(index,1) */
            

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
//--------------------------------------------FUNCIÓN POR TERMINAR-------------------
  enemiesSpearCollision = () => {
    this.spearArr.forEach((eachSpear, index) => {
      this.zombieUpArr.forEach((eachZombie, indexZ) => {

        if (eachSpear.x < eachZombie.x + eachZombie.w &&
          eachSpear.x + eachSpear.w > eachZombie.x &&
          eachSpear.y < eachZombie.y + eachZombie.h &&
          eachSpear.h + eachSpear.y > eachZombie.y) {
            this.spearArr.splice(index, 1)
            this.zombieUpArr.splice(indexZ, 1)



          }


      }
      
      )


    })

    

    /* this.spearArr.forEach((eachSpear) => {
      if (eachSpear.x < this.zombieUp.x + this.zombieUp.w &&
          eachSpear.x + eachSpear.w > this.zombieUp.x &&
          eachSpear.y < this.zombieUp.y + this.zombieUp.h &&
          eachSpear.h + eachSpear.y > this.zombieUp.y) {

          }
    }) */


    
    

    /* this.spearArr.forEach((eachSpear) => {
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

    }) */



/*     enemiesSpearCollision = () => {
      this.spearArr.forEach((eachSpear, index) => {
        this.zombieUpArr.forEach((eachZombie, indexZ) => {
  
          if (eachSpear.x < eachZombie.x + eachZombie.w &&
            eachSpear.x + eachSpear.w > eachZombie.x &&
            eachSpear.y < eachZombie.y + eachZombie.h &&
            eachSpear.h + eachSpear.y > eachZombie.y) {
              this.spearArr.splice(index, 1)
              this.zombieUpArr.splice(indexZ, 1)
  
  
  
            }
  
  
        })
  
  
      }) */


}




  gameLoop = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    this.frameCounter++;
    this.scoreUpdate()
    this.playMusic()

    // 2. Movimientos y acciones de los elementos


    
    this.rogueKnight.rogueKnightMoveDown()
    this.rogueKnight.rogueKnightMoveForward()
    this.rogueKnight.rogueKnightMoveLeft()
    this.rogueKnight.rogueKnightMoveRight()
    this.rogueKnightEnemyCollision()
    this.rogueKnightWallCollision()
    this.enemiesSpearCollision()
    
    /* this.enemyFollow() */
    this.automaticAddEnemiesRight()
    this.automaticAddEnemiesLeft()
    this.automaticAddEnemiesDown()
    this.automaticAddEnemiesUp()

    /* this.spear.throwSpear() */

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

    /* this.healthBar.show() */

    

    // 4. Efecto de recursión
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  
}



/* rogueKnightWallCollision = () => {
  if(this.rogueKnight.x + this.rogueKnight.w > canvas.width) {
    this.rogueKnight.x =canvas.width - this.rogueKnight.w
    console.log("Right Wall")

  }
  else if (this.rogueKnight.x - this.rogueKnight.w < 0) {
    this.rogueKnight.x =canvas.width - this.rogueKnight.w
    console.log("Leftt Wall")
  }
  else if (this.rogueKnight.y + this.rogueKnight.h > canvas.height) {
    this.rogueKnight.y =canvas.height - this.rogueKnight.h
    console.log("Down Wall")
  }
  else if (this.rogueKnight.y - this.rogueKnight.h < 0) {
    this.rogueKnight.y =canvas.height - this.rogueKnight.h
    console.log("Up Wall")
  }
  else if (this.rogueKnight.x < 0) {
    this.rogueKnight.x = 0
  }
  else if (this.rogueKnight.y < 0) {
    this.rogueKnight.y = 0
  }
} */