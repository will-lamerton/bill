import { Board } from "../../fen";

export function isValidRookMove(
  board: Board,
  fromRow: number,
  fromCol: number,
  toRow: number,
  toCol: number
): boolean {
  if (fromRow !== toRow && fromCol !== toCol) {
    return false;
  }
  if (fromRow === toRow) {
    const step = toCol > fromCol ? 1 : -1;
    for (let col = fromCol + step; col !== toCol; col += step) {
      if (board[fromRow][col]) {
        return false;
      }
    }
  } else {
    const step = toRow > fromRow ? 1 : -1;
    for (let row = fromRow + step; row !== toRow; row += step) {
      if (board[row][fromCol]) {
        return false;
      }
    }
  }
  return true;
}
