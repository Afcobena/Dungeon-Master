class RogueKnight {
  constructor() {
 
    this.image = new Image()
    this.image.src = "./src/images/rogue-knight-sprite.png"
    this.x = 398;
    this.y = 390;
    this.w = 50; 
    this.h = 100;
    this.vx = 0;
    this.vy = 0;
    this.hp = 100;
    this.alive = true;

    //vel x vel y de los enemygos arcotangente de ambal delta del jugador, y a X ceno de arco tangente e Y coseno de arco tangente

    
  }

  drawRogueKnight = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }

  updatePlayer = () => {
    this.drawRogueKnight();
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.w > canvas.width) {
      this.x = canvas.width - 30;
    } else if (this.x < 0) {
      this.x = 1;
    }
    if (this.y + this.h > canvas.height) {
      this.y = canvas.height - 40;
    } else if (this.y < 0) {
      this.y = 1;
    }
  };
}



class Spear {
  constructor(vx, vy) {
    this.image = new Image();
    this.image.src = "./src/images/spear-image-up.png";
    this.x = game.rogueKnight.x + game.rogueKnight.w / 2;
    this.y = game.rogueKnight.y + game.rogueKnight.h / 2;
    this.w = 50;
    this.h = 50;
    this.vx = vx * frameRate;
    this.vy = vy * frameRate;
  }

  drawSpear = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  updateSpear = () => {
    this.drawSpear();
    this.x += this.vx;
    this.y += this.vy;
  };

}
