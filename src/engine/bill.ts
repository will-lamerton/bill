import { isValidFEN, startingPosition, updateFEN } from "./fen";
import { isMoveLegal } from "./rules/validate";
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

  console.log(`Checking if FEN is valid...`);

  const valid = isValidFEN(fen);

  if (valid === false) {
    return {
      error: true,
      message: "FEN string is not valid.",
      time: calculatePerformance(),
    };
  }

  console.log("Generating next move...");
  const move = "g1f3";

  // Is move legal?
  console.log("Checking move is legal...");
  const isLegal = isMoveLegal(fen, move);

  if (isLegal === false) {
    return {
      error: true,
      message: "Something went wrong, the move suggested by Bill is not legal.",
      move: "g1f3",
      time: calculatePerformance(),
    };
  }

  // Update fen with new move.
  const newFen = updateFEN(fen, move);

  return {
    error: false,
    move: move,
    message: "Success.",
    fen: newFen,
    time: calculatePerformance(),
  };
}
