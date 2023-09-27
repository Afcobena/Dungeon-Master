class Spear {
  constructor(positionX, positionY, srcParam) {
    this.image = new Image();
    this.image.src = srcParam;
    this.x = positionX;
    this.y = positionY;
    this.w = 50;
    this.h = 50;
    this.velocity = 10;
    this.active = true;
    /* this.directionGood = directionGoodParam; */
    this.direction = {
      up: false,
      right: false,
      down: false,
      left: false,
    };
  }

  drawSpear = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  spearMove = () => {
    if (this.direction.right) {
      this.x += this.velocity;
    }
    if (this.direction.left) {
      this.x -= this.velocity;
    }
    if (this.direction.down) {
      this.y += this.velocity;
    }
    if (this.direction.up) {
      this.y -= this.velocity;
    }

    if (this.x > canvas.width) this.active = false;
    if (this.x + this.w < 0) this.active = false;

  };
}