import { describe, it } from 'mocha';
import { expect } from "chai";
import { Arithmeticable, ArithmeticableCollection, Rational } from "../src/modificacion01";

describe("ArithmeticableCollection", () => {

    describe("ArithmeticableCollection of Rational", () => {
        const rational: Rational = new Rational(1, 2);
        
        it("should be able to add items", () => {
            const rationalCollection = new ArithmeticableCollection<Rational>();
            rationalCollection.addArithmeticable(new Rational(1, 2));
            rationalCollection.addArithmeticable(new Rational(1, 2));
            const result = new Rational(1, 1);
            const suma = rationalCollection.getArithmeticable(0).add(rationalCollection.getArithmeticable(1))
            expect(suma.getValue).to.equal(result.getValue);
        });

        it("should be able to substract items", () => {
            /*const rationalCollection = new ArithmeticableCollection<Rational>();
            rationalCollection.addArithmeticable(new Rational(1, 2));
            rationalCollection.addArithmeticable(new Rational(1, 2));
            const result = new Rational(0, 0);
            //const suma = rationalCollection.getArithmeticable(0).s(rationalCollection.getArithmeticable(1))
            expect(suma.getValue).to.equal(result.getValue); */
        });
        
        it("should be able to multiply items", () => {
            //const item = new Rational(4, 1);
            //expect(rational.multiply(item)).to.equal(2);
        });

        it("should be able to divide items to the collection", () => {
            //const item1 = new Rational(4, 1);
            //const item2 = new Rational(2, 1);
            //expect(item1.divide(item2)).to.equal(2);
        });
    });




});
