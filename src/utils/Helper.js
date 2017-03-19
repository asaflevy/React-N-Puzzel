export default class Helper {
  constructor(dimension) {
    this.dimension = dimension;
    this.shuffledArray = this.fillArray();
    this.positions = this.initPosition(80);
  }

  fillArray() {
    let arrayInit = [0];
    for (let i = 1; i < Math.pow(this.dimension, 2); i++) {
      arrayInit.push(i);
    }
    return this.shuffle(arrayInit);
  }

  shuffle(shuffledArray) {
    for (let i = 0; i < shuffledArray.length; i++) {
      let j = Math.floor(Math.random() * i + 1);
      let temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    return shuffledArray;
  }

  initPosition(reactangele = 80) {
    let position_array = [];
    for (let i = 0; i < Math.pow(this.dimension, 2); i++) {
      const row_x = Math.floor(i / this.dimension);
      const col_y = (i % this.dimension);
      position_array.push([reactangele * col_y, reactangele * row_x]);
    }
    return position_array;
  }

  checkForWin(boardArray) {
    let cloneArray =  this.shuffledArray.slice(0);
    let boardCloneArray = boardArray.slice(0);
    cloneArray.splice(cloneArray.indexOf(0),1);
    boardCloneArray.splice(boardCloneArray.indexOf(0),1);
    return JSON.stringify(cloneArray.sort()) == JSON.stringify(boardCloneArray);
  }

}
