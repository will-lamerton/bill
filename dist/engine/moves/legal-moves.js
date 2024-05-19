"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLegalMoves = void 0;
const chess_js_1 = require("chess.js");
const generateLegalMoves = (fen) => {
    const chess = new chess_js_1.Chess();
    chess.load(fen);
    return chess.moves();
};
exports.generateLegalMoves = generateLegalMoves;
