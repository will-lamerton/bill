import { Board } from "../../fen";

export function isValidBishopMove(
  board: Board,
  fromRow: number,
  fromCol: number,
  toRow: number,
  toCol: number
): boolean {
  const rowDiff = Math.abs(toRow - fromRow);
  const colDiff = Math.abs(toCol - fromCol);
  if (rowDiff !== colDiff) {
    return false;
  }
  const rowStep = toRow > fromRow ? 1 : -1;
  const colStep = toCol > fromCol ? 1 : -1;
  for (let i = 1; i < rowDiff; i++) {
    if (board[fromRow + i * rowStep][fromCol + i * colStep]) {
      return false;
    }
  }
  return true;
}
