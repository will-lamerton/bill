"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBishopMove = void 0;
function isValidBishopMove(board, fromRow, fromCol, toRow, toCol) {
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);
    if (rowDiff !== colDiff) {
        return false;
    }
    const rowStep = toRow > fromRow ? 1 : -1;
    const colStep = toCol > fromCol ? 1 : -1;
    for (let i = 1; i < rowDiff; i++) {
        if (board[fromRow + i * rowStep][fromCol + i * colStep]) {
            return false;
        }
    }
    return true;
}
exports.isValidBishopMove = isValidBishopMove;
