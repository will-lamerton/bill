"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidQueenMove = void 0;
function isValidQueenMove(board, fromRow, fromCol, toRow, toCol) {
    return (isValidBishopMove(board, fromRow, fromCol, toRow, toCol) ||
        isValidRookMove(board, fromRow, fromCol, toRow, toCol));
}
exports.isValidQueenMove = isValidQueenMove;
