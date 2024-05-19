"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const fen_1 = require("./fen");
const moves_1 = require("./moves");
const board_1 = require("./board");
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
    // Check FEN is valid.
    const isValid = (0, fen_1.isValidFEN)(fen);
    if (isValid.ok === false && isValid.error !== undefined) {
        return {
            error: false,
            message: isValid.error,
            time: calculatePerformance(),
        };
    }
    // Generate legal moves.
    const legalMoves = (0, moves_1.generateLegalMoves)(fen);
    // AI HERE
    const move = legalMoves[0];
    // Make selected move.
    const newFen = (0, moves_1.makeMove)(fen, move);
    // Output board
    console.log((0, board_1.showBoard)(newFen));
    return {
        error: false,
        move: move,
        message: "Success.",
        fen: newFen,
        time: calculatePerformance(),
    };
}
exports.run = run;
