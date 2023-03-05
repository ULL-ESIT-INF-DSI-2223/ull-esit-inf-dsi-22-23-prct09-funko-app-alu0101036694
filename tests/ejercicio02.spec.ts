import { describe, it } from 'mocha';
import { expect } from "chai";
import { Game } from '../src/ejercicio02/Game';
import { Player } from '../src/ejercicio02/Player';
import { Connect4 } from '../src/ejercicio02/Connect4';

describe('Player interface', () => {
  it('should have a name property of type string', () => {
    const player: Player = { name: 'John', color: '\x1b[31m' };
    expect(typeof player.name).equal('string');
  });

  it('should have a color property of type string', () => {
    const player: Player = { name: 'John', color: '\x1b[31m' };
    expect(typeof player.color).equal('string');
  });
});

describe('Connect4', () => {
  let player1: Player = { name: 'Player 1', color: `X` };
  let player2: Player = { name: 'Player 2', color: `O` };
  let connect4: Connect4;

  beforeEach(() => {
    const players = [player1, player2]
    connect4 = new Connect4(players);
  });

  it('should start with an empty board', () => {
    const expectedBoard = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];
    expect(connect4['board']).to.deep.equal(expectedBoard);
  });

  describe('constructor', () => {
    it('should create a new Connect4 game with the correct properties', () => {
      expect(connect4.currentPlayerIndex).equal(0);
      expect(connect4.players).to.deep.equal([player1, player2]);
      expect(connect4.board.length).equal(6);
      expect(connect4.board[0].length).equal(7);
      expect(connect4.checkDraw()).eq(false);
    });
  });

  describe('Estado del juego', () => {
    it('No está en tablas', () => {
      expect(connect4.checkDraw()).eq(false);
    });
    it('No hay ganador', () => {
      expect(connect4.checkWin(0, 0)).eq(false);
    });
  });

  describe('Se inserta una ficha', () => {
    /*let promptStub;
    before(() => {
      // Simula el input por consola
      promptStub = sinon.stub().returns(1); // Devuelve 1 siempre
    });

    after(() => {
      // Restaura el prompt original
      promptStub.restore();
    });

    it('En la columna 1', () => {
      // Sobrescribe la función Prompt() con la función simulada
      const originalPrompt = global.Prompt;
      global.Prompt = promptStub;

      // Ejecuta el test
      const columnChoice = connect4.getColumnChoice();
      expect(columnChoice).to.deep.eq(0);
      // Restaura la función Prompt() original
      global.Prompt = originalPrompt;
      });*/
    it('En la columna 1 (presionar el uno 1)', () => {
      expect(connect4.getColumnChoice()).to.deep.eq(0);
    });
  });

  describe('Siguiente fila abierta en una columna determinada', () => {
    it('Ya hay una ficha', () => {
      expect(connect4.getNextOpenRow(0)).to.equal(5);
    });
    it('No hay una ficha', () => {
      expect(connect4.getNextOpenRow(1)).to.equal(5);
    });
  });
});

/*describe('Connect4', () => {
  let connect4: Connect4;
  let player1: Player;
  let player2: Player;

  beforeEach(() => {
    player1 = { name: 'Alice', color: '\u001b[31m' };
    player2 = { name: 'Bob', color: '\u001b[34m' };
    connect4 = new Connect4([player1, player2]);
  });

  

  describe('makeMove', () => {
    it('should place a piece in the correct row and column', () => {
      connect4.makeMove(0);
      expect(connect4.board[5][0]).toBe(player1.color);
      connect4.makeMove(0);
      expect(connect4.board[4][0]).toBe(player2.color);
    });

    it('should update the currentPlayerIndex', () => {
      connect4.makeMove(0);
      expect(connect4.currentPlayerIndex).toBe(1);
      connect4.makeMove(0);
      expect(connect4.currentPlayerIndex).toBe(0);
    });

    it('should update the winner property when there is a winner', () => {
      connect4.board = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', player1.color, player1.color, player1.color, player1.color],
      ];
      connect4.makeMove(3);
      expect(connect4.winner).toEqual(player1);
    });

    it('should update the isDraw property when there is a draw', () => {
      connect4.board = [
        [player1.color, player2.color, player1.color, player2.color, player1.color, player2.color, player1.color],
        [player2.color, player1.color, player2.color, player1.color, player2.color, player1.color, player2.color],
        [player1.color, player2.color, player1.color, player2.color, player1.color, player2.color, player1.color],
        [player2.color, player1.color, player2.color, player1.color, player2.color, player1.color, player2.color],
        [player1.color, player2.color, player1.color, player2.color, player1.color, player2.color, player1.color],
        [player2.color, player1.color, player2.color, player1.color, player2.color, player1.color, player2.color],
      ];
      connect4.makeMove(0);
      expect(connect4.isDraw).toBe(true);
    });
  });

  describe('checkWin', () => {
    it('should return true for a horizontal win',
  });
});
*/