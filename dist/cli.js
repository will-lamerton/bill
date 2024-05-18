#!/usr/bin/env ts-node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const bill_1 = require("./engine/bill");
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command("next <fen>", "Generate the next move when passed a FEN string of the position.", (yargs) => {
    yargs.positional("fen", {
        describe: "FEN string representing the current board state",
        type: "string",
    });
}, (argv) => {
    if (argv.fen) {
        const engine = (0, bill_1.run)(argv.fen);
        if (engine.error === true) {
            console.error(engine.message);
            return;
        }
        console.log(engine);
    }
    else {
        console.error("FEN string is required.");
    }
})
    .demandCommand(1, "You need at least one command before moving on")
    .help().argv;
