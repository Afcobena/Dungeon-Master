class Spear {
  constructor(srcParam) {
    this.image = new Image();
    this.image.src = srcParam;
    this.x = 0;
    this.y = 0;
    this.w = this.image.width;
    this.h = this.image.height;
    this.velocity = 10;
    this.active = true;
    this.direction = {
      up: false,
      right: false,
      down: false,
      left: false,
    };
  }

  
/*     spearMovement = () => {

        spearMoveRight = () => {
            if (this.direction.right) {
                this.x += this.velocity;
            } 
        }

        spearMoveLeft = () => {
            if (this.direction.left) {
                this.x -= this.velocity;
            }
        }

        spearMoveDown = () => {
            if (this.direction.down) {
                this.y += this.velocity;
            }

        }

        spearMoveUp = () => {
            if (this.direction.up) {
                this.y -= this.velocity;
            }

        if (this.x > canvas.width) this.active = false;
        if (this.x + this.w < 0) this.active = false;
        };

    } */

    drawSpear = () => {
        ctx.drawImage(
          this.image,
          this.x,
          this.y,
          this.image.width,
          this.image.height
        );
      
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
            
        }


    

}

// crear un array y que hagan mutuamente POP

/* if((player.x > this.x)) {
    this.x += this.velocity;
    this.spriteOffset = 0;
}
else if(player.x + player.width / 4 < this.x) {
    this.x -= this.velocity;
    this.spriteOffset = this.width * 2;
}
if(player.y > this.y) this.y += this.velocity - 1;
else if(player.y + player.height / 4 < this.y) this.y -= this.velocity - 1; */
