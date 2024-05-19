"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMove = void 0;
const chess_js_1 = require("chess.js");
const makeMove = (fen, move) => {
    const chess = new chess_js_1.Chess();
    chess.load(fen);
    chess.move(move);
    return chess.fen();
};
exports.makeMove = makeMove;
