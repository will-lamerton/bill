import { Chess } from "chess.js";

export const showBoard = (fen: string) => {
  const chess = new Chess();
  chess.load(fen);
  return chess.ascii();
};
