class ZombieDown {
    constructor() {
      // aqui todas las propiedades de los tubos
      this.image = new Image();
      this.image.src = "./src/images/zombie-from-down.png";
      this.x = 400;
      this.y = 700;
      this.w = 70;
      this.h = 100/* canvas.height * 0.7 */;
      this.speed = 3;
    }
  
    // aqui todos los metodos de los tubos
    drawZombieDown = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    moveZombieDown = () => {
      this.y -= this.speed
    };
  }