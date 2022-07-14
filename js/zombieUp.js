class ZombieUp {
  constructor(xParam, srcParam) {
    // aqui todas las propiedades de los tubos
    this.image = new Image();
    this.image.src = srcParam;
    this.x = xParam;
    this.y = 0;
    this.w = 70;
    this.h = 100/* canvas.height * 0.7 */;
    this.speed = 2;
  }

  // aqui todos los metodos de los tubos
  drawZombieUp = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveZombieUp = () => {
    this.y += this.speed
  };
}