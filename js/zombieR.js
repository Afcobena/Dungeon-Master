class ZombieRight {
  constructor(yParam, srcParam) {
    // aqui todas las propiedades de los tubos
    this.image = new Image();
    this.image.src = srcParam;
    this.x = canvas.width;
    this.y = yParam;
    this.w = 55;
    this.h = 90/* canvas.height * 0.7 */;
    this.speed = 4;
  }

  // aqui todos los metodos de los tubos
  drawZombieRight = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveZombieRight = () => {
    this.x -= this.speed
  };
}