import { Board, Piece, parseFEN, Move } from "../fen";
import { isMoveLegal } from "../rules/validate";

// Check if position is within the bounds of the board
function isInBounds(row: number, col: number): boolean {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

// Generate moves for a piece at a given position
function generateMovesForPiece(
  board: Board,
  piece: Piece,
  row: number,
  col: number,
  activeColor: string
): string[] {
  const moves: string[] = [];
  const directions: Record<string, number[][]> = {
    P: [
      [-1, 0],
      [-1, -1],
      [-1, 1],
      [-2, 0],
    ], // White pawn moves
    p: [
      [1, 0],
      [1, -1],
      [1, 1],
      [2, 0],
    ], // Black pawn moves
    N: [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ], // Knight moves
    B: [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ], // Bishop moves
    R: [
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ], // Rook moves
    Q: [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ], // Queen moves
    K: [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ], // King moves
  };

  if (piece === null) {
    return [];
  }

  const color = piece === piece.toUpperCase() ? "w" : "b";
  if (
    (color === "w" && activeColor === "b") ||
    (color === "b" && activeColor === "w")
  ) {
    return moves;
  }

  let pieceType: string;
  if (piece === "p" && color === "b") {
    pieceType = piece;
  } else {
    pieceType = piece.toUpperCase();
  }

  const pieceDirections = directions[pieceType];

  if (!pieceDirections) {
    console.error(`Invalid piece type: ${pieceType}`);
    return moves;
  }

  pieceDirections.forEach(([dRow, dCol]) => {
    let r = row + dRow;
    let c = col + dCol;
    const singleMoveOnly = pieceType === "N" || pieceType === "K";

    if (!isInBounds(r, c)) return;

    const target = board[r][c];
    const move = `${String.fromCharCode(col + 97)}${
      8 - row
    }${String.fromCharCode(c + 97)}${8 - r}`;

    if (piece === "P") {
      // White pawns
      if (dCol !== 0 && target && target.toLowerCase() === target) {
        // Pawn capture
        moves.push(move);
      } else if (dCol === 0 && !target) {
        // Pawn move forward
        moves.push(move);
        if (dRow === -2 && row === 6 && !board[row - 1][col]) moves.push(move); // Double step from initial position
      }
    } else if (piece === "p") {
      // Black pawns
      if (dCol !== 0 && target && target.toUpperCase() === target) {
        // Pawn capture
        moves.push(move);
      } else if (dCol === 0 && !target) {
        // Pawn move forward
        moves.push(move);
        if (dRow === 2 && row === 1 && !board[row + 1][col]) moves.push(move); // Double step from initial position
      }
    } else if (target) {
      if (
        (target.toLowerCase() === target) !==
        (piece.toLowerCase() === piece)
      ) {
        moves.push(move);
      }
    } else {
      moves.push(move);
    }

    if (singleMoveOnly) return;

    while (isInBounds(r, c)) {
      r += dRow;
      c += dCol;
      if (!isInBounds(r, c)) break;
      const nextMove = `${String.fromCharCode(col + 97)}${
        8 - row
      }${String.fromCharCode(c + 97)}${8 - r}`;
      const nextTarget = board[r][c];

      if (nextTarget) {
        if (
          (nextTarget.toLowerCase() === nextTarget) !==
          (piece.toLowerCase() === piece)
        ) {
          moves.push(nextMove);
        }
        break;
      } else {
        moves.push(nextMove);
      }
    }
  });

  return moves;
}

export function generateLegalMoves(fen: string): string[] {
  const board = parseFEN(fen);
  const moves: string[] = [];
  const activeColor = fen.split(" ")[1];

  board.forEach((row, rowIndex) => {
    row.forEach((piece, colIndex) => {
      if (piece) {
        const potentialMoves = generateMovesForPiece(
          board,
          piece,
          rowIndex,
          colIndex,
          activeColor
        );
        potentialMoves.forEach((move) => {
          if (moves.includes(move) === false && isMoveLegal(fen, move)) {
            moves.push(move);
          }
        });
      }
    });
  });

  return moves;
}
