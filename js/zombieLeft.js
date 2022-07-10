class ZombieLeft {
    constructor() {
      // aqui todas las propiedades de los tubos
      this.image = new Image();
      this.image.src = "./src/images/zombie-from-left.png";
      this.x = 0;
      this.y = 400;
      this.w = 70;
      this.h = 100/* canvas.height * 0.7 */;
      this.speed = 3;
    }
  
    // aqui todos los metodos de los tubos
    drawZombieLeft = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    moveZombieLeft = () => {
      this.x += this.speed
    };
  }