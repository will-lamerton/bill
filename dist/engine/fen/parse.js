"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMove = exports.parseFEN = void 0;
function parseFEN(fen) {
    const [placement] = fen.split(" ");
    const rows = placement.split("/");
    const board = [];
    for (const row of rows) {
        const boardRow = [];
        for (const char of row) {
            if (isNaN(Number(char))) {
                boardRow.push(char);
            }
            else {
                for (let i = 0; i < Number(char); i++) {
                    boardRow.push(null);
                }
            }
        }
        board.push(boardRow);
    }
    return board;
}
exports.parseFEN = parseFEN;
function parseMove(move) {
    const promotion = move.length === 5 ? move[4] : undefined;
    const from = move.slice(0, 2);
    const to = move.slice(2, 4);
    return { from, to, promotion };
}
exports.parseMove = parseMove;
