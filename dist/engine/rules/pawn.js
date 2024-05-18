"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPawnMove = void 0;
function isValidPawnMove(board, fromRow, fromCol, toRow, toCol, piece) {
    const direction = piece === "P" ? -1 : 1;
    const startRow = piece === "P" ? 6 : 1;
    if (fromCol === toCol) {
        // Moving forward
        if (toRow === fromRow + direction && !board[toRow][toCol]) {
            return true;
        }
        if (fromRow === startRow &&
            toRow === fromRow + 2 * direction &&
            !board[toRow][toCol] &&
            !board[fromRow + direction][fromCol]) {
            return true;
        }
    }
    else if (Math.abs(toCol - fromCol) === 1 &&
        toRow === fromRow + direction &&
        board[toRow][toCol]) {
        // Capturing diagonally
        return true;
    }
    return false;
}
exports.isValidPawnMove = isValidPawnMove;
