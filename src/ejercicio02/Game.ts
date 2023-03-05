import { Player } from "./Player";
import { Connect4 } from "./Connect4";

const RESET = "\u001b[0m";
const BOLD = "\u001b[1m";
const RED = "\u001b[31m";
const GREEN = "\u001b[32m";

/**
 * @class
 * Clase que representa un juego de Connect4.
 */
export class Game {
  /**
   * Los jugadores del juego.
   * @property {Player[]} players - Un array con los jugadores del juego.
   */
  private readonly players: Player[];

  /**
   * Crea un nuevo juego de Connect 4 con dos jugadores.
   * @constructor
   */
  constructor() {
    // Creación de jugadores
    this.players = [
      { name: "Player 1", color: `${BOLD}${RED}X${RESET}` },
      { name: "Player 2", color: `${BOLD}${GREEN}O${RESET}` },
    ];
  }

  /**
   * Comienza el juego de Connect 4.
   * @returns {void} - No devuelve nada.
   */
  public start(): void {
    const connect4 = new Connect4(this.players);
    connect4.play();
  }
}
