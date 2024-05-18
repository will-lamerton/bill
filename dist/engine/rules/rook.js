"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidRookMove = void 0;
function isValidRookMove(board, fromRow, fromCol, toRow, toCol) {
    if (fromRow !== toRow && fromCol !== toCol) {
        return false;
    }
    if (fromRow === toRow) {
        const step = toCol > fromCol ? 1 : -1;
        for (let col = fromCol + step; col !== toCol; col += step) {
            if (board[fromRow][col]) {
                return false;
            }
        }
    }
    else {
        const step = toRow > fromRow ? 1 : -1;
        for (let row = fromRow + step; row !== toRow; row += step) {
            if (board[row][fromCol]) {
                return false;
            }
        }
    }
    return true;
}
exports.isValidRookMove = isValidRookMove;
