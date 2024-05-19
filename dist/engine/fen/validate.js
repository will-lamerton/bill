"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFEN = void 0;
const chess_js_1 = require("chess.js");
const isValidFEN = (fen) => (0, chess_js_1.validateFen)(fen);
exports.isValidFEN = isValidFEN;
