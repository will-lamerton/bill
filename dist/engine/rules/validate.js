"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMoveLegal = void 0;
const fen_1 = require("../fen");
const pieces_1 = require("./pieces");
function isMoveLegal(fen, move) {
    const board = (0, fen_1.parseFEN)(fen);
    const { from, to } = (0, fen_1.parseMove)(move);
    const fromCol = from.charCodeAt(0) - "a".charCodeAt(0);
    const fromRow = 8 - parseInt(from[1]);
    const toCol = to.charCodeAt(0) - "a".charCodeAt(0);
    const toRow = 8 - parseInt(to[1]);
    const piece = board[fromRow][fromCol];
    const target = board[toRow][toCol];
    if (!piece) {
        return false; // No piece at the source square
    }
    // Prevent moving to a square occupied by a friendly piece
    if (target &&
        (target.toLowerCase() === target) === (piece.toLowerCase() === piece)) {
        return false;
    }
    switch (piece.toUpperCase()) {
        case "P":
            return (0, pieces_1.isValidPawnMove)(board, fromRow, fromCol, toRow, toCol, piece);
        case "N":
            return (0, pieces_1.isValidKnightMove)(fromRow, fromCol, toRow, toCol);
        case "B":
            return (0, pieces_1.isValidBishopMove)(board, fromRow, fromCol, toRow, toCol);
        case "R":
            return (0, pieces_1.isValidRookMove)(board, fromRow, fromCol, toRow, toCol);
        case "Q":
            return (0, pieces_1.isValidQueenMove)(board, fromRow, fromCol, toRow, toCol);
        case "K":
            return (0, pieces_1.isValidKingMove)(fromRow, fromCol, toRow, toCol);
        default:
            return false;
    }
}
exports.isMoveLegal = isMoveLegal;
