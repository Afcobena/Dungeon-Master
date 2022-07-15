class ZombieUp {
  constructor(xParam, srcParam) {
    this.image = new Image();
    this.image.src = srcParam;
    this.x = xParam;
    this.y = 0;
    this.w = 75;
    this.h = 85;
    this.speed = 2;
  }

  drawZombieUp = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveZombieUp = () => {
    this.y += this.speed
  };
}