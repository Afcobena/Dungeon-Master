class ZombieLeft {
    constructor(yParam, srcParam) {
      // aqui todas las propiedades de los tubos
      this.image = new Image();
      this.image.src = srcParam;
      this.x = 0;
      this.y = yParam;
      this.w = 70;
      this.h = 100/* canvas.height * 0.7 */;
      this.speed = 3;
      this.directionX = 1;
      this.directionY = 1;
      
    }
  
    // aqui todos los metodos de los tubos
    drawZombieLeft = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    moveZombieLeft = () => {
      this.x = this.x + this.speed * this.directionX
      this.y = this.y + this.speed * this.directionY
    };
  }