class RogueKnight {
  constructor() {
    // aqui todas las propiedades del pollito
    this.image = new Image()
    this.image.src = "./src/images/rogue-knight-sprite.png"
    this.x = 390; // posición eje X
    this.y = 550; // posición eje Y
    this.w = 40; // width: ancho
    this.h = 100; // height: alto
    this.speedX = 10;
    this.speedY = 10;
    this.teclasPress = {
      ArrowLeft: false,
      ArrowRight: false,
      ArrowUp: false,
      ArrowDown: false
      
    }

    this.upArr = [];
    this.upRightArr = [];
    this.rightArr = [];
    this.downRightArr = [];
    this.downArr = [];
    this.downLeftArr = [];
    this.leftArr = ["./src/images/Left-1.png", "./src/images/Left-2.png", "./src/images/Left-3.png", "./src/images/Left-4.png"];
    this.upLeftArr = [];
    this.arrIndex = 0;


    //vel x vel y de los enemygos arcotangente de ambal delta del jugador, y a X ceno de arco tangente e Y coseno de arco tangente

    // crear 8 array y una propiedad para cada uno con el indice de la imagen actual
    // crear condicionales en el que me muestre en cada condicional una imagen o la siguiente

  }

  // aqui todos los metodos del pollito

  drawRogueKnight = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }




  //-------------------------------------MOVIMIENTO EN LOS 8 EJES----------------------------------

  rogueKnightMoveDown = () => {
    if (this.teclasPress.ArrowDown === true) {
      this.y += this.speedY
    }
    
  }

  rogueKnightMoveForward = () => {
    if (this.teclasPress.ArrowUp === true) {
      this.y -= this.speedY
      
    }

  }

  rogueKnightMoveLeft = () => {
    if (this.teclasPress.ArrowLeft === true) {
      this.x -= this.speedX
      /* this.updateImage()  */
    }

  }

  rogueKnightMoveRight = () => {
    if (this.teclasPress.ArrowRight === true) {
      this.x += this.speedX
    }

  }
  // hacer un for each para que itere por cada uno da de las fotos

  // tengo que crear una function update image con 8 condicionales y que vayan recoriendo todos los lados

  updateImage = () => {
    if (this.teclasPress.ArrowUp === true && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === false) {
      
    }
    if (this.teclasPress.ArrowUp === true && this.teclasPress.ArrowRight === true && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === false) {
        this.upRightArr = this.arrIndex
      }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === true && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === false) {
        this.rightArr = this.arrIndex
      }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === true && teclasPress.ArrowDown === true && this.teclasPress.ArrowLeft === false) {
        this.downRightArr= this.arrIndex
      }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === true && this.teclasPress.ArrowLeft === false) {
        this.downArr= this.arrIndex
      }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === true && this.teclasPress.ArrowLeft === true) {
        this.downLeftArr = this.arrIndex
      }

    if (this.teclasPress.ArrowUp === false && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === true) {
        /* this.image.src = this.leftArr.forEach((eachImg) => {
          eachImg.updateImage()
        }) */
      }

    if (this.teclasPress.ArrowUp === true && this.teclasPress.ArrowRight === false && teclasPress.ArrowDown === false && this.teclasPress.ArrowLeft === true) {
        this.upLeftArr = this.arrIndex
      }
      
  }
      
} 








// uppdate image ea funcion verifica los mismos condicionales cual e sla imagen que va a colocar


/* 
    this.image.src = "./src/images/zombie-from-right.png"
*/



