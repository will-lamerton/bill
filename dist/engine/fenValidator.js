"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFEN = void 0;
/**
 * Method to test if a string is a valid FEN.
 * @param fen - FEN string
 * @returns {boolean}
 */
function isValidFEN(fen) {
    const fenParts = fen.split(" ");
    if (fenParts.length !== 6) {
        return false;
    }
    const [piecePlacement, activeColor, castlingAvailability, enPassantTarget, halfmoveClock, fullmoveNumber,] = fenParts;
    // Validate piece placement
    const rows = piecePlacement.split("/");
    if (rows.length !== 8) {
        return false;
    }
    const validPieces = "prnbqkPRNBQK";
    for (const row of rows) {
        let rowCount = 0;
        for (const char of row) {
            if (validPieces.includes(char)) {
                rowCount += 1;
            }
            else if (!isNaN(Number(char))) {
                rowCount += Number(char);
            }
            else {
                return false;
            }
        }
        if (rowCount !== 8) {
            return false;
        }
    }
    // Validate active color
    if (!["w", "b"].includes(activeColor)) {
        return false;
    }
    // Validate castling availability
    if (!/^(-|[KQkq]{1,4})$/.test(castlingAvailability)) {
        return false;
    }
    // Validate en passant target
    if (!/^(-|[a-h][36])$/.test(enPassantTarget)) {
        return false;
    }
    // Validate halfmove clock
    if (isNaN(Number(halfmoveClock)) || Number(halfmoveClock) < 0) {
        return false;
    }
    // Validate fullmove number
    if (isNaN(Number(fullmoveNumber)) || Number(fullmoveNumber) <= 0) {
        return false;
    }
    return true;
}
exports.isValidFEN = isValidFEN;
