"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFEN = void 0;
const fen_1 = require("../fen");
function updateFEN(fen, move) {
    const [placement, activeColor, castling, enPassant, halfmove, fullmove] = fen.split(" ");
    const board = (0, fen_1.parseFEN)(fen);
    const { from, to, promotion } = (0, fen_1.parseMove)(move);
    const fromCol = from.charCodeAt(0) - "a".charCodeAt(0);
    const fromRow = 8 - parseInt(from[1]);
    const toCol = to.charCodeAt(0) - "a".charCodeAt(0);
    const toRow = 8 - parseInt(to[1]);
    const piece = board[fromRow][fromCol];
    board[fromRow][fromCol] = null;
    // Handle castling
    if (piece === "K" && from === "e1" && (to === "g1" || to === "c1")) {
        // White castling
        if (to === "g1") {
            // Kingside
            board[7][7] = null;
            board[7][5] = "R";
        }
        else {
            // Queenside
            board[7][0] = null;
            board[7][3] = "R";
        }
    }
    else if (piece === "k" && from === "e8" && (to === "g8" || to === "c8")) {
        // Black castling
        if (to === "g8") {
            // Kingside
            board[0][7] = null;
            board[0][5] = "r";
        }
        else {
            // Queenside
            board[0][0] = null;
            board[0][3] = "r";
        }
    }
    // Handle en passant
    if (piece === "P" &&
        fromRow === 3 &&
        toRow === 2 &&
        toCol === fromCol + 1 &&
        enPassant === to) {
        board[toRow + 1][toCol] = null;
    }
    else if (piece === "p" &&
        fromRow === 4 &&
        toRow === 5 &&
        toCol === fromCol + 1 &&
        enPassant === to) {
        board[toRow - 1][toCol] = null;
    }
    // Handle pawn promotion
    if (piece === "P" && toRow === 0 && promotion) {
        board[toRow][toCol] = promotion.toUpperCase();
    }
    else if (piece === "p" && toRow === 7 && promotion) {
        board[toRow][toCol] = promotion.toLowerCase();
    }
    else {
        board[toRow][toCol] = piece;
    }
    const newActiveColor = activeColor === "w" ? "b" : "w";
    const newHalfmove = activeColor === "b" ? Number(halfmove) + 1 : halfmove;
    const newFullmove = activeColor === "b" ? Number(fullmove) + 1 : fullmove;
    return (0, fen_1.generateFEN)(board, newActiveColor, castling, enPassant, newHalfmove, newFullmove);
}
exports.updateFEN = updateFEN;
