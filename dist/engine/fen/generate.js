"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFEN = void 0;
function generateFEN(board, activeColor, castling, enPassant, halfmove, fullmove) {
    const placement = board
        .map((row) => {
        let emptySquares = 0;
        return (row
            .map((piece) => {
            if (piece) {
                const result = emptySquares
                    ? emptySquares.toString() + piece
                    : piece;
                emptySquares = 0;
                return result;
            }
            else {
                emptySquares++;
                return "";
            }
        })
            .join("") + (emptySquares ? emptySquares.toString() : ""));
    })
        .join("/");
    return `${placement} ${activeColor} ${castling} ${enPassant} ${halfmove} ${fullmove}`;
}
exports.generateFEN = generateFEN;
