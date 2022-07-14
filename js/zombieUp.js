class ZombieUp {
  constructor(xParam, srcParam) {
    this.image = new Image();
    this.image.src = srcParam;
    this.x = xParam;
    this.y = 0;
    this.w = 70;
    this.h = 100;
    this.speed = 2;
  }

  drawZombieUp = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveZombieUp = () => {
    this.y += this.speed
  };
}