import { validateFen } from "chess.js";

export const isValidFEN = (fen: string): { ok: boolean; error?: string } =>
  validateFen(fen);
