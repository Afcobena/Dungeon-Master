class Spear {
  constructor() {
    this.image = new Image();
    this.image.src = "./src/images/spear-image.png";
    this.x = 0;
    this.y = 0;
    this.w = this.image.width;
    this.h = this.image.height;
    this.velocity = 10;
    this.active = true;
    this.direction = {
      right: false,
      left: false,
    };
  }

  spearMovement = () => {
    if (this.direction.right) {
      this.x += this.velocity;
    } else this.x -= this.velocity;

    if (this.x > canvas.width) this.active = false;
    if (this.x + this.w < 0) this.active = false;
  }

  drawSpear = () => {
    ctx.drawImage(this.image, this.x, this.y, this.image.width, this.image.height)
}
}


// crear un array y que hagan mutuamente POP