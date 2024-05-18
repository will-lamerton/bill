"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidKingMove = exports.isValidQueenMove = void 0;
function isValidQueenMove(board, fromRow, fromCol, toRow, toCol) {
    return (isValidBishopMove(board, fromRow, fromCol, toRow, toCol) ||
        isValidRookMove(board, fromRow, fromCol, toRow, toCol));
}
exports.isValidQueenMove = isValidQueenMove;
function isValidKingMove(fromRow, fromCol, toRow, toCol) {
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);
    return rowDiff <= 1 && colDiff <= 1;
}
exports.isValidKingMove = isValidKingMove;
