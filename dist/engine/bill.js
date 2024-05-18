"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const fen_1 = require("./fen");
const validate_1 = require("./rules/validate");
const perf_hooks_1 = require("perf_hooks");
let startTime;
function calculatePerformance() {
    return `${(perf_hooks_1.performance.now() - startTime).toFixed(3)}ms`;
}
function run(fen) {
    startTime = perf_hooks_1.performance.now();
    if (fen === "start") {
        fen = fen_1.startingPosition;
    }
    console.log(`Checking if FEN is valid...`);
    const valid = (0, fen_1.isValidFEN)(fen);
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
    const isLegal = (0, validate_1.isMoveLegal)(fen, move);
    if (isLegal === false) {
        return {
            error: true,
            message: "Something went wrong, the move suggested by Bill is not legal.",
            move: "g1f3",
            time: calculatePerformance(),
        };
    }
    // Update fen with new move.
    const newFen = (0, fen_1.updateFEN)(fen, move);
    return {
        error: false,
        move: move,
        message: "Success.",
        fen: newFen,
        time: calculatePerformance(),
    };
}
exports.run = run;
