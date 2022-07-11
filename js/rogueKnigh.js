class RogueKnight {
  constructor() {
    // aqui todas las propiedades del pollito
    this.image = new Image()
    this.image.src = "./src/images/champion.png"
    this.x = 390; // posición eje X
    this.y = 550; // posición eje Y
    this.w = 70; // width: ancho
    this.h = 100; // height: alto
    this.speedX = 20;
    this.speedY = 20;
    this.teclasPress = {
      ArrowLeft: false,
      ArrowRight: false,
      ArrowUp: false,
      ArrowDown: false
      
    }

  }

  // aqui todos los metodos del pollito

  drawRogueKnight = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }

  // gravedad del pollo
/*   pollitoGravity = () => {
    this.y = this.y + this.speed
  } */

  //-------------------------------------MOVIMIENTO EN 4 EJES----------------------------------
  rogueKnightMoveDown = () => {
      this.y += this.speedY

  }

  rogueKnightMoveForward = () => {
      this.y -= this.speedY

  }

  rogueKnightMoveLeft = () => {
      this.x -= this.speedX

  }

  rogueKnightMoveRight = () => {
      this.x += this.speedX

  }

/*   allMovesKeyDown = (event) => {
    if(event.keyCode == 39) {
      key.right = true;
      key.left = false;
      player.direction = 'right';
    }
    if(event.keyCode == 37) {
      key.right = false;
      key.left = true;
      player.direction = 'left';
    }
    if(event.keyCode == 38) {
      key.up = true;
      key.down = false;
    }
    if(event.keyCode == 40) {
      key.up = false;
      key.down = true;
    }
  }

  allMovesKeyUp = (event) => {
      if(event.keyCode == 39) key.right = false;
      if(event.keyCode == 37) key.left = false;
      if(event.keyCode == 38) key.up = false;
      if(event.keyCode == 40) key.down = false;
    }
   */









