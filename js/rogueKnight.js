class RogueKnight {
  constructor() {

    this.image = new Image()
    this.image.src = "./src/images/rogue-knight-sprite.png"
    this.x = 398;
    this.y = 390;
    this.w = 50;
    this.h = 100;
    this.vx = 0;
    this.vy = 0;
    this.speedX = 10;
    this.speedY = 10;
    this.lifes = 3;
    this.alive = true;
    this.teclasPress = {
      ArrowLeft: false,
      ArrowRight: false,
      ArrowUp: false,
      ArrowDown: false

    }
  }

  drawRogueKnight = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }

  //---------------------------MOVIMIENTO EN LOS 8 EJES----------------------------------

  rogueKnightMoveDown = () => {
    if (this.teclasPress.ArrowDown === true) {
      this.y += this.speedY
      this.image.src = "./src/images/downKnight/Down-1.png"
    }

  }

  rogueKnightMoveForward = () => {
    if (this.teclasPress.ArrowUp === true) {
      this.y -= this.speedY
      this.image.src = "./src/images/upKnigth/Up-1.png"
    }

  }

  rogueKnightMoveLeft = () => {
    if (this.teclasPress.ArrowLeft === true) {
      this.x -= this.speedX
      this.image.src = "./src/images/leftKnight/Left-1.png"
    }

  }

  rogueKnightMoveRight = () => {
    if (this.teclasPress.ArrowRight === true) {
      this.x += this.speedX
      this.image.src = "./src/images/rightKnight/Right-1.png"
    }

  }

}


