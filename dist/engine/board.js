"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBoard = void 0;
const chess_js_1 = require("chess.js");
const showBoard = (fen) => {
    const chess = new chess_js_1.Chess();
    chess.load(fen);
    return chess.ascii();
};
exports.showBoard = showBoard;
