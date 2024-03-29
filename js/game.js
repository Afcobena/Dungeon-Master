class Game {
  constructor() {
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

    this.isGameOn = true;
    this.isGamePaused = false;
    this.startTime = performance.now();
    this.frames = 0;
    this.FPSNormal = 1;
    this.eliminationCounter = 0
    }
    
    introScreen = () => {
      canvas.style.display = "none"
      introScreenDOM.style.display = "flex"
      scoreCaseDOM = "none"
      scoreUpdateDOM = "none"

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

          let randomPositionY = Math.random() * (canvas.height + 150 && canvas.height - 150)
    
          let newZombie = new ZombieRight(randomPositionY, "./src/images/zombie-from-right.png")
          this.zombieRightArr.push(newZombie)
    }
  }

  automaticAddEnemiesLeft = () => {
    if (this.zombieLeftArr.length === 0 || this.zombieLeftArr[this.zombieLeftArr.length - 1].x > 600 / 2) {
  
        let randomPositionYUp = Math.random() * (canvas.height + 150 && canvas.height - 150)      
  
        let newZombieLeftUp = new ZombieLeft(randomPositionYUp, "./src/images/zombie-from-left.png")
        this.zombieLeftArr.push(newZombieLeftUp)

  }
}

  automaticAddEnemiesDown = () => {
    if (this.zombieDownArr.length === 0 || this.zombieDownArr[this.zombieDownArr.length - 1].y < canvas.height / 4) {

        let randomPositionXUp = Math.random() *  (canvas.width + 150 && canvas.width - 150) 

        let newZombieDownUp = new ZombieDown(randomPositionXUp, "./src/images/zombie-from-down.png")
        this.zombieDownArr.push(newZombieDownUp)
  }
}

  automaticAddEnemiesUp = () => {
    if (this.zombieUpArr.length === 0 || this.zombieUpArr[this.zombieUpArr.length - 1].y > 600 / 2) {

      let randomPositionXUp = Math.random() * (canvas.width + 190 && canvas.width - 190) 

      let newZombieUpUp = new ZombieUp(randomPositionXUp, "./src/images/zombie-from-up.png")
      this.zombieUpArr.push(newZombieUpUp)
  }
}

//--------------------------------------------FUNCIÓN POR TERMINAR-------------------
/* throwSpear = () => {
  let positionX = this.rogueKnight.x
  let positionY = this.rogueKnight.y

  let newSpear = new Spear(positionX, positionY, "./src/images/bearTrap.png")

  if (this.spearArr.length < 5) {
  this.spearArr.push(newSpear)
  }
  
} */


throwSpear = () => {
  let positionX = this.rogueKnight.x;
  let positionY = this.rogueKnight.y;

  let newSpear = new Spear(positionX, positionY, "./src/images/bearTrap.png");

  if (this.spearArr.length < 5) {
    this.spearArr.push(newSpear);
  }

  // Check if the spear collides with any enemy and eliminate them
  this.zombieUpArr.forEach((zombie, index) => {
    if (
      newSpear.x < zombie.x + zombie.w &&
      newSpear.x + newSpear.w > zombie.x &&
      newSpear.y < zombie.y + zombie.h &&
      newSpear.y + newSpear.h > zombie.y
    ) {
      this.spearArr.splice(this.spearArr.indexOf(newSpear), 1); // Remove the spear
      this.zombieUpArr.splice(index, 1); // Remove the eliminated zombie
      this.score += 25; // Increase the score
      // Update your elimination counter here
      updateEliminationCounter();
    }
  });

  this.zombieLeftArr.forEach((zombie, index) => {
    if (
      newSpear.x < zombie.x + zombie.w &&
      newSpear.x + newSpear.w > zombie.x &&
      newSpear.y < zombie.y + zombie.h &&
      newSpear.y + newSpear.h > zombie.y
    ) {
      this.spearArr.splice(this.spearArr.indexOf(newSpear), 1); // Remove the spear
      this.zombieLeftArr.splice(index, 1); // Remove the eliminated zombie
      this.score += 25; // Increase the score
      // Update your elimination counter here
      updateEliminationCounter();
    }
  });

  this.zombieDownArr.forEach((zombie, index) => {
    if (
      newSpear.x < zombie.x + zombie.w &&
      newSpear.x + newSpear.w > zombie.x &&
      newSpear.y < zombie.y + zombie.h &&
      newSpear.y + newSpear.h > zombie.y
    ) {
      this.spearArr.splice(this.spearArr.indexOf(newSpear), 1); // Remove the spear
      this.zombieDownArr.splice(index, 1); // Remove the eliminated zombie
      this.score += 25; // Increase the score
      // Update your elimination counter here
      updateEliminationCounter();
    }
  });

  this.zombieRightArr.forEach((zombie, index) => {
    if (
      newSpear.x < zombie.x + zombie.w &&
      newSpear.x + newSpear.w > zombie.x &&
      newSpear.y < zombie.y + zombie.h &&
      newSpear.y + newSpear.h > zombie.y
    ) {
      this.spearArr.splice(this.spearArr.indexOf(newSpear), 1); // Remove the spear
      this.zombieRightArr.splice(index, 1); // Remove the eliminated zombie
      this.score += 25; // Increase the score
      // Update your elimination counter here
      updateEliminationCounter();
    }
  });

};



  // TODO function unfinished
  
  updateEliminationCounter = () => {
  this.eliminationCounter++;
  
  const counterElement = document.getElementById("elimination-counter");
  if (counterElement) {
    counterElement.innerText = `Eliminations: ${this.eliminationCounter}`;
  }
}

  rogueKnightWallCollision = () => {
    if(this.rogueKnight.x + this.rogueKnight.w > canvas.width) {
      this.rogueKnight.x =canvas.width - this.rogueKnight.w
    }
    else if (this.rogueKnight.y + this.rogueKnight.h > canvas.height) {
      this.rogueKnight.y =canvas.height - this.rogueKnight.h
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
                this.gameOver()
              }
      })

      this.zombieLeftArr.forEach((eachZombie) => {
        if (eachZombie.x < this.rogueKnight.x + this.rogueKnight.w &&
            eachZombie.x + eachZombie.w > this.rogueKnight.x &&
            eachZombie.y < this.rogueKnight.y + this.rogueKnight.h &&
            eachZombie.h + eachZombie.y > this.rogueKnight.y) {
                this.gameOver()
            }
      })
      this.zombieDownArr.forEach((eachZombie) => {
        if (eachZombie.x < this.rogueKnight.x + this.rogueKnight.w &&
            eachZombie.x + eachZombie.w > this.rogueKnight.x &&
            eachZombie.y < this.rogueKnight.y + this.rogueKnight.h &&
            eachZombie.h + eachZombie.y > this.rogueKnight.y) {
                this.gameOver()
            }
      })
      this.zombieUpArr.forEach((eachZombie) => {
        if (eachZombie.x < this.rogueKnight.x + this.rogueKnight.w &&
            eachZombie.x + eachZombie.w > this.rogueKnight.x &&
            eachZombie.y < this.rogueKnight.y + this.rogueKnight.h &&
            eachZombie.h + eachZombie.y > this.rogueKnight.y) {
                this.gameOver()
            }
      })
  }

  enemiesSpearCollision = () => {
  this.spearArr.forEach((eachSpear, index) => {
    this.zombieUpArr.forEach((eachZombie, indexZU) => {
      if (eachSpear.x < eachZombie.x + eachZombie.w &&
          eachSpear.x + eachSpear.w > eachZombie.x &&
          eachSpear.y < eachZombie.y + eachZombie.h &&
          eachSpear.h + eachSpear.y > eachZombie.y) {
            this.spearArr.splice(index, 1)
            this.zombieUpArr.splice(indexZU, 1)
            this.score += 25;
        }
    })
    this.zombieRightArr.forEach((eachZombieR, indexZR) => {
      if (eachSpear.x < eachZombieR.x + eachZombieR.w &&
          eachSpear.x + eachSpear.w > eachZombieR.x &&
          eachSpear.y < eachZombieR.y + eachZombieR.h &&
          eachSpear.h + eachSpear.y > eachZombieR.y) {
            this.spearArr.splice(index, 1)
            this.zombieRightArr.splice(indexZR, 1)
            this.score += 25;
          }
    })
    this.zombieDownArr.forEach((eachZombie, indexZD) => {
      if (eachSpear.x < eachZombie.x + eachZombie.w &&
          eachSpear.x + eachSpear.w > eachZombie.x &&
          eachSpear.y < eachZombie.y + eachZombie.h &&
          eachSpear.h + eachSpear.y > eachZombie.y) {
            this.spearArr.splice(index, 1)
            this.zombieDownArr.splice(indexZD, 1)
            this.score += 25;
        }
    })
    this.zombieLeftArr.forEach((eachZombie, indexZL) => {
      if (eachSpear.x < eachZombie.x + eachZombie.w &&
          eachSpear.x + eachSpear.w > eachZombie.x &&
          eachSpear.y < eachZombie.y + eachZombie.h &&
          eachSpear.h + eachSpear.y > eachZombie.y) {
            this.spearArr.splice(index, 1)
            this.zombieLeftArr.splice(indexZL, 1)
            this.score += 25;
          }
    })
  })
}

gameOver = () => {
  this.isGameOn = false;
  canvas.style.display = "none"
  gameOverScreenDOM.style.display = "flex"
    gameScreenDOM.style.display = "none"
  gameAudio.pause()
}

  gameLoop = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.frameCounter++;
    this.scoreUpdate()


    // 2. Movimientos y acciones de los elementos
    this.rogueKnight.rogueKnightMoveDown()
    this.rogueKnight.rogueKnightMoveForward()
    this.rogueKnight.rogueKnightMoveLeft()
    this.rogueKnight.rogueKnightMoveRight()
    this.rogueKnightEnemyCollision()
    this.rogueKnightWallCollision()
    this.enemiesSpearCollision()
    
    
    this.automaticAddEnemiesRight()
    this.automaticAddEnemiesLeft()
    this.automaticAddEnemiesDown()
    this.automaticAddEnemiesUp()


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

timeUpdate = () => {
  timeUpdateDOM.innerText = this.time;

}