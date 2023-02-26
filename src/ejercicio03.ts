/* Ejercicio 3 - No cabrees a la reina

Dadas las posiciones de dos reinas en un tablero de ajedrez, determine si ambas reinas podrían atacarse en caso 
de cabrearse una con la otra. En el ajedrez, una reina puede atacar piezas ubicadas en la misma fila, columna o 
diagonal.

Un tablero de ajedrez puede representarse mediante un array bidimensional de 8 x 8 casillas. Por lo tanto, si la 
reina negra está ubicada en la posición (1, 3), mientras que la reina blanca está ubicada en la posición (3, 5), 
tendríamos una estructura de datos como la que sigue:

[
    [-, -, -, -, -, -, -, -]
    [-, -, -, N, -, -, -, -]
    [-, -, -, -, -, -, -, -]
    [-, -, -, -, -, B, -, -]
    [-, -, -, -, -, -, -, -]
    [-, -, -, -, -, -, -, -]
    [-, -, -, -, -, -, -, -]
    [-, -, -, -, -, -, -, -]
]

Escriba una función checkAtack que, dada una estructura de datos como la anterior, devuelva un valor lógico 
indicando si ambas reinas podrían atacarse dadas las posiciones de las mismas. Tenga en cuenta que solo puede 
haber una reina blanca y una reina negra en el tablero. En caso de que lo anterior no suceda, la función deberá 
devolver el valor undefined.

Por último, el tablero debe consistir en, exactamente, 8 filas y 8 columnas, donde cada casilla puede contener 
alguno de los valores -, N o B, exclusivamente. Aunque la anterior comprobación podría llevarse a cabo a través 
del código fuente incluido en la función (en tiempo de ejecución), defina un tipo de datos adecuado que impida, 
desde el punto de vista del tipado (en tiempo de compilación), pasarle a la función checkAtack un tablero no válido, 
esto es, con un número de filas/columnas diferente a 8 y/o celdas con valores no válidos). */


//export type ChessBoard = ['-' | 'B' | 'N'][][];
export type ChessBoard = Array<Array<'-' | 'N' | 'B'>>;

export function isValidChessBoard(board: unknown): board is ChessBoard {
    if (!Array.isArray(board) || board.length !== 8) {
      return false;
    }
  
    let numBlack = 0;
    let numWhite = 0;
  
    for (const row of board) {
      if (!Array.isArray(row) || row.length !== 8) {
        return false;
      }
  
      for (const cell of row) {
        if (!['-', 'N', 'B'].includes(cell)) {
          return false;
        }
  
        if (cell === 'N') {
          numBlack++;
        } else if (cell === 'B') {
          numWhite++;
        }
      }
    }
  
    if (numBlack !== 1 || numWhite !== 1) {
      return false;
    }
  
    return true;
} 

export function checkAttack(board: ChessBoard): boolean | undefined {
  if (!isValidChessBoard(board)) {
    return undefined;
  }

  const blackIndex = board.findIndex(row => row.includes('N'));
  const whiteIndex = board.findIndex(row => row.includes('B'));

  

  if (blackIndex === -1 || whiteIndex === -1) {
    // Si no se encuentra alguna de las reinas, el tablero es inválido
    return undefined;
  }

  const blackRow = blackIndex;
  const blackCol = board[blackIndex].indexOf('N');

  const whiteRow = whiteIndex;
  const whiteCol = board[whiteIndex].indexOf('B');

  if (blackRow === whiteRow || blackCol === whiteCol) {
    return true;
  }

  if (Math.abs(blackRow - whiteRow) === Math.abs(blackCol - whiteCol)) {
    return true;
  }

  return false;
}
