import { parseFEN, parseMove } from "../fen";

import {
  isValidPawnMove,
  isValidKnightMove,
  isValidBishopMove,
  isValidRookMove,
  isValidQueenMove,
  isValidKingMove,
} from "./pieces";

export function isMoveLegal(fen: string, move: string): boolean {
  const board = parseFEN(fen);
  const { from, to } = parseMove(move);

  const fromCol = from.charCodeAt(0) - "a".charCodeAt(0);
  const fromRow = 8 - parseInt(from[1]);
  const toCol = to.charCodeAt(0) - "a".charCodeAt(0);
  const toRow = 8 - parseInt(to[1]);

  const piece = board[fromRow][fromCol];
  const target = board[toRow][toCol];

  if (!piece) {
    return false; // No piece at the source square
  }

  // Prevent moving to a square occupied by a friendly piece
  if (
    target &&
    (target.toLowerCase() === target) === (piece.toLowerCase() === piece)
  ) {
    return false;
  }

  switch (piece.toUpperCase()) {
    case "P":
      return isValidPawnMove(board, fromRow, fromCol, toRow, toCol, piece);
    case "N":
      return isValidKnightMove(fromRow, fromCol, toRow, toCol);
    case "B":
      return isValidBishopMove(board, fromRow, fromCol, toRow, toCol);
    case "R":
      return isValidRookMove(board, fromRow, fromCol, toRow, toCol);
    case "Q":
      return isValidQueenMove(board, fromRow, fromCol, toRow, toCol);
    case "K":
      return isValidKingMove(fromRow, fromCol, toRow, toCol);
    default:
      return false;
  }
}
