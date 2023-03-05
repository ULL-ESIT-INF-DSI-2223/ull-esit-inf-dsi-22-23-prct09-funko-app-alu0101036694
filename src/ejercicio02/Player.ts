/**
 * @interface Player Interfaz que representa un jugador de Connect4.
 */
export interface Player {
  /**
   * @property
   * El nombre del jugador.
   */
  name: string;

  /**
   *  @property
   *  El color del jugador, representado en formato de escape ANSI.
   */
  color: string;
}
