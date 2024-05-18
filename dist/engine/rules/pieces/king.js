"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidKingMove = void 0;
function isValidKingMove(fromRow, fromCol, toRow, toCol) {
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);
    return rowDiff <= 1 && colDiff <= 1;
}
exports.isValidKingMove = isValidKingMove;
