class Pipe {
    constructor(yParam, srcParam) {
      // aqui todas las propiedades de los tubos
      this.image = new Image();
      this.image.src = srcParam;
      this.x = canvas.width;
      this.y = yParam;
      this.w = 70;
      this.h = 100/* canvas.height * 0.7 */;
      this.speed = 3;
    }
  
    // aqui todos los metodos de los tubos
    drawPipe = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    pipeMovement = () => {
      this.x = this.x - this.speed
    };
  }