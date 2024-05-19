import { Chess } from "chess.js";

export const makeMove = (fen: string, move: string) => {
  const chess = new Chess();
  chess.load(fen);
  chess.move(move);

  return chess.fen();
};
