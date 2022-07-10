class Enemy {
    constructor(xParam, yParam, srcParam) {
      // aqui todas las propiedades de los tubos
      this.image = new Image();
      this.image.src = srcParam;
      this.x = xParam;
      this.y = yParam;
      this.w = 60;
      this.h = 90;
      this.speed = 2;
      this.directionRight = this.x -= this.speed;

    }
  
    // aqui todos los metodos de los tubos
    drawZombieLeft = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    moveZombieLeft = () => {
      this.x += this.speed
    };
  }