class Zombie {
    constructor() {
      // aqui todas las propiedades de los tubos
      this.image = new Image();
      this.image.src = "./src/images/zombie arriba.png";
      this.x = 400;
      this.y = 100;
      this.w = 70;
      this.h = 100/* canvas.height * 0.7 */;
      this.speed = 3;
    }
  
    // aqui todos los metodos de los tubos
    drawZombie = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    moveZombie = () => {
      this.y += this.speed
    };
  }