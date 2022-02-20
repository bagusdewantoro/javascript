class Board {
  constructor(myState = ['','','','','','','','','']) {
    this.myState = myState;
    // console.log(myState)
  }

  printFormattedBoard() {
    let formattedString = '';
    this.myState.forEach((cell, index) => {
      formattedString += cell ? ` ${cell} |` : `   |`
      // long version of one line code above is :
      // if (cell) {
      //   formattedString = formattedString + ` ${cell} |`
      // } else {
      //   formattedString = formattedString + `   |`
      // }
      // console.log(`formattedString1 = ${formattedString}`)
      if ((index + 1) % 3 === 0) {
        formattedString = formattedString.slice(0, -1);
        // console.log(`formattedString2 = ${formattedString}`)
        if (index < 8) {
          formattedString += '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n';
          // console.log(`formattedString3 = ${formattedString}`)
        }
      }
    })
    console.log('%c' + formattedString, 'color: #c11dd4; font-size:16px') // %c is for styling, combined with 2nd parameter
  }

  isEmpty() {
    return this.myState.every(cell => !cell)
  }

  isFull() {
    return this.myState.every(cell => cell)
  }

  isTerminal() {
    // return false if board is empty
    if (this.isEmpty()) return false
    // check horizontal win
    if(this.myState[0] === this.myState[1] && this.myState[0] === this.myState[2] && this.myState[0]) {
    	return {'winner': this.myState[0], 'direction': 'H', 'row': 1};
    }
    if(this.myState[3] === this.myState[4] && this.myState[3] === this.myState[5] && this.myState[3]) {
    	return {'winner': this.myState[3], 'direction': 'H', 'row': 2};
    }
    if(this.myState[6] === this.myState[7] && this.myState[6] === this.myState[8] && this.myState[6]) {
    	return {'winner': this.myState[6], 'direction': 'H', 'row': 3};
    }
    //Checking Vertical Wins
    if(this.myState[0] === this.myState[3] && this.myState[0] === this.myState[6] && this.myState[0]) {
    	return {'winner': this.myState[0], 'direction': 'V', 'column': 1};
    }
    if(this.myState[1] === this.myState[4] && this.myState[1] === this.myState[7] && this.myState[1]) {
    	return {'winner': this.myState[1], 'direction': 'V', 'column': 2};
    }
    if(this.myState[2] === this.myState[5] && this.myState[2] === this.myState[8] && this.myState[2]) {
    	return {'winner': this.myState[2], 'direction': 'V', 'column': 3};
    }
    //Checking Diagonal Wins
    if(this.myState[0] === this.myState[4] && this.myState[0] === this.myState[8] && this.myState[0]) {
    	return {'winner': this.myState[0], 'direction': 'D', 'diagonal': 'main'};
    }
    if(this.myState[2] === this.myState[4] && this.myState[2] === this.myState[6] && this.myState[2]) {
    	return {'winner': this.myState[2], 'direction': 'D', 'diagonal': 'counter'};
    }
    //If no winner but the board is full, then it's a draw
    if (this.isFull()) {
      return {'winner': 'draw'};
    }
    //return false otherwise
    return false;
  }

  insert(symbol, position) {
    if (![0,1,2,3,4,5,6,7,8].includes(position)) {
      throw new Error('Cell index does not exist')
    }
    if (!['x', 'o'].includes(symbol)) {
      throw new Error('The symbol can only be x or o')
    }
    if (this.myState[position]) {
      console.log(`cell ${position} is already filled`)
      return false;
    }
    this.myState[position] = symbol;
    console.log(`fill cell ${position} with ${this.myState[position]}`)
    return true;
  }

  getAvailableMoves() {
    const moves = [];
    this.myState.forEach((cell, index) => {
      if (!cell) moves.push(index)
    });
    return moves;
  }
}

export default Board;
