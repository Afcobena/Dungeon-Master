class Pollito {
    constructor() {
      // aqui todas las propiedades del pollito
      this.image = new Image()
      this.image.src = "./src/images/champion.png"
      this.x = 100; // posición eje X
      this.y = 100; // posición eje Y
      this.w = 70; // width: ancho
      this.h = 100; // height: alto
      this.speed = 1;
      this.jumpSpeed = 40;
    }
  
    // aqui todos los metodos del pollito
  
    drawPollito = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
  
    // gravedad del pollo
    pollitoGravity = () => {
      this.y = this.y + this.speed
    }
  
    // salto del pollo
    pollitoJump = () => {
      this.y = this.y - this.jumpSpeed
    }
  
    // colision pollo suelo (hecho en Game para simplificar)
    // pollitoFloorCollision = () => {
    //   if (this.y + this.h > canvas.height) {
    //     console.log("El pollito llegó al suelo")
    //     // ok, el juego se termina. isGameOn = false
    //     return false
    //   } else {
    //     return true
    //   }
    // }
  
  }