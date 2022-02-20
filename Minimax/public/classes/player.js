import Board from './board.js';

class Player {
  constructor(maxDepth = -1) {
    this.maxDepth = maxDepth;
    this.nodesMap = new Map();
  }

  getBestMove(board, maximizing = true, callback = () => {}, depth = 0) {
    // clear nodesMap if the function is callled for a new move
    if (depth == 0) this.nodesMap.clear();
    if (board.isTerminal() || depth === this.maxDepth) {
      if (board.isTerminal().winner === 'x') {
        return 100 - depth
      } else if (board.isTerminal().winner === 'o') {
        return -100 + depth
      }
      return 0;
    }
    if (maximizing) {
      // initialize best to lowest possible value
      let best = -100;
      // loop through empty cells
      board.getAvailableMoves().forEach(index => {
        const child = new Board([...board.myState]);
        // create a child node by inserting the maximizing symbol x into current empty cell
        child.insert('x', index);
        // recursively call getBestMove this time with the new board and minimizing turn and incrementing the depth
        const nodeValue = this.getBestMove(child, false, callback, depth + 1);
        // updating best value
        best = Math.max(best, nodeValue);
        // If it's the main function call, not a recursive one, map each heuristic value with it's moves indices
        if (depth == 0) {
          // Comma separated indices if multiple moves have the same heuristic value
          const move = this.nodesMap.has(nodeValue)
            ? `${this.nodesMap.has(nodeValue)}, ${index}`
            : index;
          this.nodesMap.set(nodeValue, move)
        }
      });
      // If it's the main call, return the index of the best move or a random index if multiple indices have the same value
      if (depth == 0) {
        let returnValue;
        if (typeof this.nodesMap.get(best) === 'string') {
          const arr = this.nodesMap.get(best).split(',');
          const rand = Math.floor(Math.random() * arr.length);
          returnValue = arr[rand];
        } else {
          returnValue = this.nodesMap.get(best);
        }
        // run the callback after calculation and return the index
        callback(returnValue);
        return returnValue;
      }
      // if it's not main call (recursive) return the heuristic value for next calculation
      return best;
    }

    if (!maximizing) {
      // initialize best to highest possible value
      let best = 100;
      // loop through empty cells
      board.getAvailableMoves().forEach(index => {
        const child = new Board([...board.myState]);
        // create a child node by inserting the maximizing symbol x into current empty cell
        child.insert('o', index);
        // recursively call getBestMove this time with the new board and minimizing turn and incrementing the depth
        const nodeValue = this.getBestMove(child, true, callback, depth + 1);
        // updating best value
        best = Math.min(best, nodeValue);
        // If it's the main function call, not a recursive one, map each heuristic value with it's moves indices
        if (depth == 0) {
          // Comma separated indices if multiple moves have the same heuristic value
          const move = this.nodesMap.has(nodeValue)
            ? `${this.nodesMap.has(nodeValue)}, ${index}`
            : index;
          this.nodesMap.set(nodeValue, move)
        }
      });
      // If it's the main call, return the index of the best move or a random index if multiple indices have the same value
      if (depth == 0) {
        let returnValue;
        if (typeof this.nodesMap.get(best) === 'string') {
          const arr = this.nodesMap.get(best).split(',');
          const rand = Math.floor(Math.random() * arr.length);
          returnValue = arr[rand];
        } else {
          returnValue = this.nodesMap.get(best);
        }
        // run the callback after calculation and return the index
        callback(returnValue);
        return returnValue;
      }
      // if it's not main call (recursive) return the heuristic value for next calculation
      return best;
    }

  }
}

export default Player;
