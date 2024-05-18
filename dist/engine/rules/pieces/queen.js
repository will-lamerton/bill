"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidQueenMove = void 0;
const bishop_1 = require("./bishop");
const rook_1 = require("./rook");
function isValidQueenMove(board, fromRow, fromCol, toRow, toCol) {
    return ((0, bishop_1.isValidBishopMove)(board, fromRow, fromCol, toRow, toCol) ||
        (0, rook_1.isValidRookMove)(board, fromRow, fromCol, toRow, toCol));
}
exports.isValidQueenMove = isValidQueenMove;
