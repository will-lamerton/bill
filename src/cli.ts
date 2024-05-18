#!/usr/bin/env ts-node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { run } from "./engine/bill";

interface Argv {
  _: (string | number)[];
  $0: string;
  [key: string]: unknown;
  fen?: string;
}

yargs(hideBin(process.argv))
  .command(
    "next <fen>",
    "Generate the next move when passed a FEN string of the position.",
    (yargs) => {
      yargs.positional("fen", {
        describe: "FEN string representing the current board state",
        type: "string",
      });
    },
    (argv: Argv) => {
      if (argv.fen) {
        const engine = run(argv.fen);

        if (engine.error === true) {
          console.error(engine.message);
          return;
        }

        console.log(engine);
      } else {
        console.error("FEN string is required.");
      }
    }
  )
  .demandCommand(1, "You need at least one command before moving on")
  .help().argv;
