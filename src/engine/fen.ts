export type Piece = string | null;
export type Board = Piece[][];

export interface Move {
  from: string;
  to: string;
  promotion?: string;
}

export const startingPosition =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export { isValidFEN } from "./fen/validate";
export { parseFEN, parseMove } from "./fen/parse";
export { generateFEN } from "./fen/generate";
export { updateFEN } from "./fen/update";
