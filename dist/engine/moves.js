"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMove = exports.generateLegalMoves = void 0;
var generate_1 = require("./moves/generate");
Object.defineProperty(exports, "generateLegalMoves", { enumerable: true, get: function () { return generate_1.generateLegalMoves; } });
var move_1 = require("./moves/move");
Object.defineProperty(exports, "makeMove", { enumerable: true, get: function () { return move_1.makeMove; } });
