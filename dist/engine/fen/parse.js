"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMove = exports.parseFEN = void 0;
function parseFEN(fen) {
    const parts = fen.split(" ");
    const squares = parts[0].split("/").map((row) => {
        const expandedRow = [];
        for (const char of row) {
            if (isNaN(Number(char))) {
                expandedRow.push(char);
            }
            else {
                for (let i = 0; i < Number(char); i++) {
                    expandedRow.push(null);
                }
            }
        }
        return expandedRow;
    });
    return {
        squares,
        activeColor: parts[1],
        castlingRights: parts[2],
        enPassantTarget: parts[3] === "-" ? null : parts[3],
        halfMoveClock: parseInt(parts[4], 10),
        fullMoveNumber: parseInt(parts[5], 10),
    };
}
exports.parseFEN = parseFEN;
function parseMove(move) {
    const promotion = move.length === 5 ? move[4] : undefined;
    const from = move.slice(0, 2);
    const to = move.slice(2, 4);
    return { from, to, promotion };
}
exports.parseMove = parseMove;
