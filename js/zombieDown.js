class ZombieDown {
    constructor(xParam, srcParam) {
      this.image = new Image();
      this.image.src = srcParam;
      this.x = xParam;
      this.y = canvas.height;
      this.w = 55;
      this.h = 90;
      this.speed = 2;
    }
  
    drawZombieDown = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    moveZombieDown = () => {
      this.y -= this.speed
    };
  }