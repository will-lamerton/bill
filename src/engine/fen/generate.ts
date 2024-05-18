import { Board } from "../fen";

export function generateFEN(
  board: Board,
  activeColor: string,
  castling: string,
  enPassant: string,
  halfmove: string | number,
  fullmove: string | number
): string {
  const placement = board
    .map((row) => {
      let emptySquares = 0;
      return (
        row
          .map((piece) => {
            if (piece) {
              const result = emptySquares
                ? emptySquares.toString() + piece
                : piece;
              emptySquares = 0;
              return result;
            } else {
              emptySquares++;
              return "";
            }
          })
          .join("") + (emptySquares ? emptySquares.toString() : "")
      );
    })
    .join("/");

  return `${placement} ${activeColor} ${castling} ${enPassant} ${halfmove} ${fullmove}`;
}
