class RogueKnight {
  constructor() {
 
    this.image = new Image()
    this.image.src = "./src/images/rogue-knight-sprite.png"
    this.x = 398;
    this.y = 390;
    this.w = 50; 
    this.h = 100;
    this.speedX = 10;
    this.speedY = 10;
    this.lifes = 3;
    this.teclasPress = {
      ArrowLeft: false,
      ArrowRight: false,
      ArrowUp: false,
      ArrowDown: false
      
    }

    

    this.upArr = ["./src/images/upKnigth/Up-1.png", "./src/images/upKnigth/Up-2.png", "./src/images/upKnigth/Up-3.png", "./src/images/upKnigth/Up-4.png", "./src/images/upKnigth/Up-5.png", "./src/images/upKnigth/Up-6.png"];
    this.upRightArr = [];
    this.rightArr = ["./src/images/rightKnight/Right-1.png", "./src/images/rightKnight/Right-2.png", "./src/images/rightKnight/Right-3.png", "./src/images/rightKnight/Right-4.png", "./src/images/rightKnight/Right-5.png", "./src/images/rightKnight/Right-6.png"];
    this.downRightArr = [];
    this.downArr = ["./src/images/downKnight/Down-1.png", "./src/images/downKnight/Down-2.png", "./src/images/downKnight/Down-3.png", "./src/images/downKnight/Down-4.png", "./src/images/downKnight/Down-5.png", "./src/images/downKnight/Down-6.png"];
    this.downLeftArr = [];
    this.leftArr = ["./src/images/leftKnight/Left-1.png", "./src/images/leftKnight/Left-2.png", "./src/images/leftKnight/Left-3.png", "./src/images/leftKnight/Left-4.png", "./src/images/leftKnight/Left-5.png", "./src/images/leftKnight/Left-6.png"];
    this.upLeftArr = [];
    this.arrIndex = 0;


    //vel x vel y de los enemygos arcotangente de ambal delta del jugador, y a X ceno de arco tangente e Y coseno de arco tangente

    
  }

  drawRogueKnight = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }

  //-------------------------------------MOVIMIENTO EN LOS 8 EJES----------------------------------

  rogueKnightMoveDown = () => {
    if (this.teclasPress.ArrowDown === true) {
      this.y += this.speedY
      this.image.src = "./src/images/downKnight/Down-1.png"
    }
    
  }

  rogueKnightMoveForward = () => {
    if (this.teclasPress.ArrowUp === true) {
      this.y -= this.speedY
      this.image.src = "./src/images/upKnigth/Up-1.png"
    }

  }

  rogueKnightMoveLeft = () => {
    if (this.teclasPress.ArrowLeft === true) {
      this.x -= this.speedX
      this.image.src = "./src/images/leftKnight/Left-1.png"
    }

  }

  rogueKnightMoveRight = () => {
    if (this.teclasPress.ArrowRight === true) {
      this.x += this.speedX
      this.image.src = "./src/images/rightKnight/Right-1.png"

    }

  }
  // hacer un for each para que itere por cada uno da de las fotos

  // tengo que crear una function update image con 8 condicionales y que vayan recoriendo todos los lados

  // hacer un bucle que entre en el indice del array y me devuelva el la siguiente imagen

  updateImage = () => {
    if (this.teclasPress.ArrowUp === true && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === false) {
        this.image.src = this.upArr.forEach((eachImg) => {
        eachImg.updateImage()
      })
    }
    if (this.teclasPress.ArrowUp === true && this.teclasPress.ArrowRight === true && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === false) {
        this.upRightArr = this.arrIndex
      }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === true && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === false) {
        this.image.src = this.rightArr.forEach((eachImg) => {
        eachImg.updateImage()
      })
    }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === true && teclasPress.ArrowDown === true && this.teclasPress.ArrowLeft === false) {
        this.downRightArr= this.arrIndex
      }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === true && this.teclasPress.ArrowLeft === false) {
      this.image.src = this.downArr.forEach((eachImg) => {
        eachImg.updateImage()
      })
    }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === true && this.teclasPress.ArrowLeft === true) {
        this.downLeftArr = this.arrIndex
      }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === true) {
        this.image.src = this.leftArr.forEach((eachImg) => {
          eachImg.updateImage()
        })
      }

    if (this.teclasPress.ArrowUp === true && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === true) {
        this.upLeftArr = this.arrIndex
      }
      
  }
      
} 