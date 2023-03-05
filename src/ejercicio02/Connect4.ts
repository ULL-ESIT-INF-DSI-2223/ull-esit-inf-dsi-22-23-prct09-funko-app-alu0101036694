import * as Prompt from "prompt-sync";
import { Player } from "./Player";

/**
 * Representa un juego Connect 4.
 */
export class Connect4 {
  /** Número de filas en el tablero */
  public readonly ROWS: number = 6;
  /** Número de columnas en el tablero */
  public readonly COLS: number = 7;
  /** Lista de jugadores */
  public readonly players: Player[];
  /** Índice del jugador actual en la lista de jugadores */
  public currentPlayerIndex: number = 0;
  /** El tablero del juego */
  public readonly board: string[][];

  /**
   * @constructor
   * Crea una instancia del juego Connect4 con los jugadores especificados.
   * @param players La lista de jugadores.
   */
  constructor(players: Player[]) {
    this.players = players;
    this.board = [];
    for (let i = 0; i < this.ROWS; i++) {
      this.board.push(Array(this.COLS).fill(" "));
    }
  }

  /**
   * Comienza el juego y continúa hasta que se determina un ganador o un empate.
   */
  public play() {
    let gameOver = false;
    let winner: Player | null = null;
    while (!gameOver) {
      console.clear();
      console.log(
        `It's ${this.players[this.currentPlayerIndex].name}'s (${
          this.players[this.currentPlayerIndex].color
        }) turn!`
      );
      this.printBoard();

      const column = this.getColumnChoice();
      const row = this.getNextOpenRow(column);

      this.board[row][column] = this.players[this.currentPlayerIndex].color;
      if (this.checkWin(row, column)) {
        gameOver = true;
        winner = this.players[this.currentPlayerIndex];
      } else if (this.checkDraw()) {
        gameOver = true;
      } else {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
      }
    }

    console.clear();
    this.printBoard();
    if (winner) {
      console.log(`Congratulations ${winner.name}! You won!`);
    } else {
      console.log("It's a draw!");
    }
  }

  /**
   * Solicita al usuario que elija una columna en la que colocar una ficha y devuelve el índice de la columna seleccionada.
   * @returns El índice de la columna seleccionada.
   */
  public getColumnChoice(): number {
    const prompt = Prompt();
    while (true) {
      const columnStr = parseInt(prompt(`Enter column (1-${this.COLS}): `));
      if (columnStr === null) {
        return -1;
      }
      const column = columnStr - 1;
      const row = this.getNextOpenRow(column);
      if (isNaN(column) || column < 0 || column >= this.COLS) {
        console.log("Invalid column choice. Please try again.");
      } else if (row === -1) {
        console.log("Column is full. Please choose again.");
        continue;
      } else {
        return column;
      }
    }
  }

  /**
   * Obtiene la siguiente fila abierta en una columna determinada.
   * @param column El índice de la columna.
   * @returns El índice de la fila, o -1 si la columna está llena.
   */
  public getNextOpenRow(column: number): number {
    for (let row = this.ROWS - 1; row >= 0; row--) {
      if (this.board[row][column] === " ") {
        return row;
      }
    }
    return -1;
  }

  /**
   * Comprueba si el jugador actual ha ganado el juego.
   * @param row - La fila en la que se insertó la última ficha.
   * @param column - La columna en la que se insertó la última ficha.
   * @returns true si el jugador actual ha ganado, false si no.
   */
  public checkWin(row: number, column: number): boolean {
    const color = this.players[this.currentPlayerIndex].color;

    // Check horizontal
    let count = 0;
    for (let i = 0; i < this.COLS; i++) {
      if (this.board[row][i] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // Check vertical
    count = 0;
    for (let i = 0; i < this.ROWS; i++) {
      if (this.board[i][column] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // Check diagonal (top-left to bottom-right)
    count = 0;
    const topLeftRow = row - Math.min(row, column);
    const topLeftCol = column - Math.min(row, column);
    for (
      let i = topLeftRow, j = topLeftCol;
      i < this.ROWS && j < this.COLS;
      i++, j++
    ) {
      if (this.board[i][j] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // Check diagonal (top-right to bottom-left)
    count = 0;
    const topRightRow = row - Math.min(row, this.COLS - 1 - column);
    const topRightCol = column + Math.min(row, this.COLS - 1 - column);
    for (
      let i = topRightRow, j = topRightCol;
      i < this.ROWS && j >= 0;
      i++, j--
    ) {
      if (this.board[i][j] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // No winner
    return false;
  }

  /**
   * Comprueba si se ha producido un empate en el juego.
   * @returns true si hay un empate, false si no.
   */
  public checkDraw(): boolean {
    for (let i = 0; i < this.COLS; i++) {
      if (this.board[0][i] === " ") {
        return false;
      }
    }
    return true;
  }

  /**
   * Imprime el tablero actual del juego en la consola.
   */
  private printBoard(): void {
    // Print column numbers
    let columnNumbers = "";
    for (let i = 1; i <= this.COLS; i++) {
      columnNumbers += `  ${i} `;
    }
    console.log(columnNumbers);

    // Print board
    for (let i = 0; i < this.ROWS; i++) {
      let rowString = "|";
      for (let j = 0; j < this.COLS; j++) {
        rowString += ` ${this.board[i][j]} |`;
      }
      console.log(rowString);
    }
  }
}
