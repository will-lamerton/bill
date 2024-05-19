import { startingPosition, isValidFEN } from "./fen";
import { generateLegalMoves, makeMove } from "./moves";
import { showBoard } from "./board";

import { performance } from "perf_hooks";

interface EngineOuput {
  error: boolean;
  message: string;
  fen?: string;
  move?: string;
  time: string;
}

let startTime: number;

function calculatePerformance(): string {
  return `${(performance.now() - startTime).toFixed(3)}ms`;
}

export function run(fen: string): EngineOuput {
  startTime = performance.now();

  if (fen === "start") {
    fen = startingPosition;
  }

  // Check FEN is valid.
  const isValid = isValidFEN(fen);

  if (isValid.ok === false && isValid.error !== undefined) {
    return {
      error: false,
      message: isValid.error,
      time: calculatePerformance(),
    };
  }

  // Generate legal moves.
  const legalMoves = generateLegalMoves(fen);

  // AI HERE
  const move = legalMoves[0];

  // Make selected move.
  const newFen = makeMove(fen, move);

  // Output board
  console.log(showBoard(newFen));

  return {
    error: false,
    move: move,
    message: "Success.",
    fen: newFen,
    time: calculatePerformance(),
  };
}
