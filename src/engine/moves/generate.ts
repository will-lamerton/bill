import { Chess } from "chess.js";

export const generateLegalMoves = (fen: string) => {
  const chess = new Chess();
  chess.load(fen);
  return chess.moves();
};
