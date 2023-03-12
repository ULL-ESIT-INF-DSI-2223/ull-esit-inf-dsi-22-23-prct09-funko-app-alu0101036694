import { describe, it } from 'mocha';
import { expect } from "chai";
import { Lista } from '../src/ejercicio02/ejercicio02';

describe('Lista', () => {
  // Crear una lista de números para las pruebas
  const listaNumeros = new Lista<number>();

  beforeEach(() => {
    listaNumeros.appendItem(1);
    listaNumeros.appendItem(2);
    listaNumeros.appendItem(3);
  });

  afterEach(() => {
    listaNumeros.clear();
  });

  describe('Constructor de la clase', () => {
    it('La lista se crea correctamente', () => {
      expect(new Lista<number>(1, 2, 3, 4, 5)).to.be.instanceOf(Lista);
      expect(new Lista<number>(1, 2, 3, 4, 5).getData()).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('Puedo crear lista de strings', () => {
      expect(new Lista<string>('a', 'b', 'c', 'd', 'e')).to.be.instanceOf(Lista);
      expect(new Lista<string>('a', 'b', 'c', 'd', 'e').getData()).to.deep.equal(['a', 'b', 'c', 'd', 'e']);
    });

    it('Puedo crear lista de booleanos', () => {
      expect(new Lista<boolean>(true, false, true, false)).to.be.instanceOf(Lista);
      expect(new Lista<boolean>(true, false, true, false).getData()).to.deep.equal([true, false, true, false]);
    });
  });

  describe('#getData()', () => {
    it('El getter de los datos funciona', () => {
      let listaNumeros_1 = new Lista<number>(1, 2, 3, 4);
      expect(listaNumeros_1.getData()).to.deep.equal([1, 2, 3, 4]);
    });
  });

  describe('#appendItem()', () => {
    it('debe agregar elementos a la lista', () => {
      listaNumeros.appendItem(4);
      expect(listaNumeros.getLength()).to.equal(4);
    });
  });

  describe('#appendList()', () => {
    let listaNumeros_1 = new Lista<number>(1, 2, 3, 4);
    let listaNumeros_2 = new Lista<number>(1, 2, 3, 4);
    listaNumeros_1.appendList(listaNumeros_2)
    it('debe agragar una lista a la actual', () => {
      expect(listaNumeros_1.getData()).to.deep.equal([1, 2, 3, 4, 1, 2, 3, 4]);
    });
  });

  describe('#concatenate()', () => {
    describe('debe concatenar varias listas en una sola', () => {
      const listaNumeros1 = new Lista<number>(4, 5);
      const listaNumeros2 = new Lista<number>(6, 7);
      const listaNumeros3 = new Lista<number>(8, 9, 10);
      listaNumeros1.concatenate(listaNumeros2, listaNumeros3);
      it('El tamaño es el correcto', () => {
        expect(listaNumeros1.getLength()).to.equal(7);
      });
      it('Los elementos coinciden', () => {
        expect(listaNumeros1.getData()).to.deep.equal([4, 5, 6, 7, 8, 9, 10]);
      });
    });
  });  

  describe('#filter()', () => {
    it('debe filtrar la lista utilizando un predicado lógico', () => {
      const listaPares = listaNumeros.filter((num) => num % 2 === 0);
      expect(listaPares.getData()).to.deep.equal([2]);
    });
  });

  describe('#getLength()', () => {
    it('debe obtener la longitud de la lista', () => {
      expect(listaNumeros.getLength()).to.equal(3);
    });
  });

  describe('#map()', () => {
    it('debe aplicar una función a cada elemento de la lista', () => {
      const listaDobles = listaNumeros.map((num) => num * 2);
      expect(listaDobles.getData()).to.deep.equal([2, 4, 6]);
    });
  });

  describe('#reduce()', () => {
    it('debe reducir la lista a un único valor utilizando una función y un acumulador inicial', () => {
      const resultado = listaNumeros.reduce((accumulator, num) => accumulator + num, 0);
      expect(resultado).to.equal(6);
    });
  });

  describe('#reverse()', () => {
    it('debe obtener una lista con los elementos en orden inverso', () => {
      const listaInvertida = listaNumeros.reverse();
      expect(listaInvertida.getData()).to.deep.equal([3, 2, 1]);
    });
  });

  describe('#forEach()', () => {
    it('debe iterar en los elementos de la lista y ejecutar una función con cada uno de ellos', () => {
      let suma = 0;
      listaNumeros.forEach((num) => suma += num);
      expect(suma).to.equal(6);
    });
  });
});
