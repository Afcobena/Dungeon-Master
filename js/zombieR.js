class ZombieRight {
  constructor(yParam, srcParam) {
    this.image = new Image();
    this.image.src = srcParam;
    this.x = canvas.width;
    this.y = yParam;
    this.w = 50;
    this.h = 85;
    this.speed = 3.2;
  }

  drawZombieRight = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveZombieRight = () => {
    this.x -= this.speed
  };
}