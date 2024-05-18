import { Board } from "../../fen";

import { isValidBishopMove } from "./bishop";
import { isValidRookMove } from "./rook";

export function isValidQueenMove(
  board: Board,
  fromRow: number,
  fromCol: number,
  toRow: number,
  toCol: number
): boolean {
  return (
    isValidBishopMove(board, fromRow, fromCol, toRow, toCol) ||
    isValidRookMove(board, fromRow, fromCol, toRow, toCol)
  );
}
