"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidKnightMove = void 0;
function isValidKnightMove(fromRow, fromCol, toRow, toCol) {
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
}
exports.isValidKnightMove = isValidKnightMove;
