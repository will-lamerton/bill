import { Board, Move, Piece } from "../fen";

export function parseFEN(fen: string): Board {
  const [placement] = fen.split(" ");
  const rows = placement.split("/");
  const board: Board = [];

  for (const row of rows) {
    const boardRow: Piece[] = [];
    for (const char of row) {
      if (isNaN(Number(char))) {
        boardRow.push(char);
      } else {
        for (let i = 0; i < Number(char); i++) {
          boardRow.push(null);
        }
      }
    }
    board.push(boardRow);
  }

  return board;
}

export function parseMove(move: string): Move {
  const promotion = move.length === 5 ? move[4] : undefined;
  const from = move.slice(0, 2);
  const to = move.slice(2, 4);
  return { from, to, promotion };
}
