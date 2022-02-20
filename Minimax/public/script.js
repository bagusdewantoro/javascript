import Board from './classes/board.js';
import Player from './classes/player.js';

// const board1 = new Board(["x", "o", "", "x", "o", "", "o", "", "x"]);
//
// console.log(board1.isTerminal());
// console.log(`available moves are: ${board1.getAvailableMoves()}`);
// board1.printFormattedBoard();
//
// board1.insert('x', 7);
// board1.printFormattedBoard();
// console.log(`available moves are: ${board1.getAvailableMoves()}`);
//
// board1.insert('o', 1);
// console.log(board1.isTerminal());
//
// board1.insert('o', 2);
// board1.printFormattedBoard();
// console.log(board1.isTerminal());

// =================================

const board2 = new Board(["x", "x", "", "", "", "", "o", "o", ""]);
board2.printFormattedBoard();
const p = new Player();

// best move for x
console.log(p.getBestMove(board2)); // 2

// best move for o
console.log(p.getBestMove(board2, false)); // 8

console.log(p.nodesMap);
