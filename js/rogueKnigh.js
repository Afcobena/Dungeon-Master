class RogueKnight {
  constructor() {
    // aqui todas las propiedades del pollito
    this.image = new Image()
    this.image.src = "./src/images/champion.png"
    this.x = 590; // posición eje X
    this.y = 550; // posición eje Y
    this.w = 70; // width: ancho
    this.h = 100; // height: alto
    this.speed = 20;
    this.jumpSpeed = 40;

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
      this.y += this.speed

  }

  rogueKnightMoveForward = () => {
      this.y -= this.speed

  }

  rogueKnightMoveLeft = () => {
      this.x -= this.speed

  }

  rogueKnightMoveRight = () => {
      this.x += this.speed

  }


}