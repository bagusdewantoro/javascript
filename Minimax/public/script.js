import Board from './classes/board.js';

const board1 = new Board(["x", "o", "", "x", "o", "", "o", "", "x"]);
const board2 = new Board(['','','','','','','','','']);
const board3 = new Board(['x','o','o','o','o','x','x','x','o']);

// console.log(board2.isEmpty());
// console.log(board3.isFull());

console.log(board1.isTerminal());
console.log(`available moves are: ${board1.getAvailableMoves()}`);
board1.printFormattedBoard();

board1.insert('x', 7);
board1.printFormattedBoard();
console.log(`available moves are: ${board1.getAvailableMoves()}`);

board1.insert('o', 1);
console.log(board1.isTerminal());

board1.insert('o', 2);
board1.printFormattedBoard();
console.log(board1.isTerminal());
