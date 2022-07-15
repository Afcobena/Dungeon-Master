class ZombieLeft {
    constructor(yParam, srcParam) {
      this.image = new Image();
      this.image.src = srcParam;
      this.x = 0;
      this.y = yParam;
      this.w = 60;
      this.h = 90;
      this.speed = 5;

      //-----------------------------FUNCTION FOLLOW-------------------
      /*this.directionX = 1;
      this.directionY = 1; */

      /* moveZombieLeft = () => {
      this.x = this.x + this.speed * this.directionX
      this.y = this.y + this.speed * this.directionY
    }; */
      
    }
  
    drawZombieLeft = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    moveZombieLeft = () => {
      this.x += this.speed
    };


  }