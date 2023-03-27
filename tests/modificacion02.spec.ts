import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AddMapReduce, SubMapReduce, ProdMapReduce, DivMapReduce } from '../src/modificacion02';

describe('MapReduceTemplate', () => {
  const numbers1 = [1, 2, 3, 4, 5];
  const numbers2 = [6, 7, 8, 9, 10];

  describe('AddMapReduce', () => { 
    it('debe devolver 15 sumando cuando empieza desde el valor 0', () => { // 0 + 1 + 2 + 3 + 4 + 5 = 15
      const addMapReduce = new AddMapReduce(numbers1);
      const result = addMapReduce.execute((n) => n);
      expect(result).to.equal(15);
    });

    it('debe devolver 40 sumando cuando empieza desde el valor 0', () => { // 0 + 6 + 7 + 8 + 9 + 10 = 30
        const addMapReduce = new AddMapReduce(numbers2);
        const result = addMapReduce.execute((n) => n);
        expect(result).to.equal(40);
        }
    );

  });

  describe('SubMapReduce', () => { 
    it('debe devolver -15 restando cuando empieza desde el valor 0', () => { // 0 - 1 - 2 - 3 - 4 - 5 = -15
      const subMapReduce = new SubMapReduce(numbers1);
      const result = subMapReduce.execute((n) => n);
      expect(result).to.equal(-15);
    });

    it('debe devolver -40 restando cuando empieza desde el valor 0', () => { // 0 - 6 - 7 - 8 - 9 - 10 = -35
        const subMapReduce = new SubMapReduce(numbers2);
        const result = subMapReduce.execute((n) => n);
        expect(result).to.equal(-40);
        }
    );
  });

  describe('ProdMapReduce', () => { 
    it('debe devolver 120 multiplicando cuando empieza desde el valor 1', () => { // 1 * 1 * 2 * 3 * 4 * 5 = 120
      const prodMapReduce = new ProdMapReduce(numbers1);
      const result = prodMapReduce.execute((n) => n);
      expect(result).to.equal(120);
    });

    it('debe devolver 30240 multiplicando cuando empieza desde el valor 1', () => { // 1 * 6 * 7 * 8 * 9 * 10 = 151200
        const prodMapReduce = new ProdMapReduce(numbers2);
        const result = prodMapReduce.execute((n) => n);
        expect(result).to.equal(30240);
        }
    );
  });

  describe('DivMapReduce', () => { 
    it('debe devolver 0.008333333333333333 dividiendo cuando empieza desde el valor 1', () => { // 1 / 1 / 2 / 3 / 4 / 5 = 0.008333333333333333
      const divMapReduce = new DivMapReduce(numbers1);
      const result = divMapReduce.execute((n) => n);
      expect(result).to.equal(0.008333333333333333);
    });

    it('debe devolver 0.000033068783068783064 dividiendo cuando empieza desde el valor 1', () => { // 1 / 6 / 7 / 8 / 9 / 10 = 0.000033068783068783064
        const divMapReduce = new DivMapReduce(numbers2);
        const result = divMapReduce.execute((n) => n);
        expect(result).to.equal(0.000033068783068783064);
        }
    );
  });
});
