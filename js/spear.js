class Spear {
  constructor(xParam, yParam, srcParam, directionGoodParam) {
    this.image = new Image();
    this.image.src = srcParam;
    this.x = xParam;
    this.y = yParam;
    this.w = 70;
    this.h = 17;
    this.velocity = 10;
    this.active = true;
    this.directionGood = directionGoodParam;
    this.direction = {
      up: false,
      right: false,
      down: false,
      left: false,
    };
  }
//

  /* 

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
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

//

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
            //al salir que haga shift
    }

/*   spearMove = () => {
    if (this.direction.down === true) {
        this.y += this.speedY;
        this.image.src = "./src/images/spear/spear-image-down.png";
    }

    else if (this.direction.up === true) {
        this.y -= this.speedY;
        this.image.src = "./src/images/spear/spear-image-up.png";
    }

    else if (this.direction.left === true) {
        this.x -= this.speedX;
        this.image.src = "./src/images/spear/spear-image-left.png";
    }

    else if (this.direction.right === true) {
        this.x += this.speedX;
        this.image.src = "./src/images/spear/spear-image-right.png";
    }

  } */



/*   spearMove = () => {
    if (this.direction.down === this.teclasPress.ArrowDown) {
        this.y += this.speedY;
        this.image.src = "./src/images/spear/spear-image-down.png";
    }

    if (this.direction.up === this.teclasPress.ArrowUp) {
        this.y -= this.speedY;
        this.image.src = "./src/images/spear/spear-image-up.png";
    }

    if (this.direction.left === this.teclasPress.ArrowLeft) {
        this.x -= this.speedX;
        this.image.src = "./src/images/spear/spear-image-left.png";
    }

    if (this.direction.right === this.teclasPress.ArrowRight) {
        this.x += this.speedX;
        this.image.src = "./src/images/spear/spear-image-right.png";
    }

  } */

  /* spearMove = () => {
        if (this.direction.right) {
            this.x += this.velocity;
        }   */
  /*  if (this.direction.left) {
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
            
        } */

  /* } */
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
