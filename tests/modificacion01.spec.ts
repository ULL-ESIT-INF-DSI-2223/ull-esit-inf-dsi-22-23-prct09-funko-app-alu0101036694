import { describe, it } from 'mocha';
import { expect } from "chai";
import { Arithmeticable, ArithmeticableCollection, Rational, Complex } from "../src/modificacion01";

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
            const rationalCollection = new ArithmeticableCollection<Rational>();
            rationalCollection.addArithmeticable(new Rational(1, 2));
            rationalCollection.addArithmeticable(new Rational(1, 2));
            const result = new Rational(0, 0);
            const resta = rationalCollection.getArithmeticable(0).subtract(rationalCollection.getArithmeticable(1))
            expect(resta.getValue).to.equal(result.getValue); 
        });
        
        it("should be able to multiply items", () => {
            const rationalCollection = new ArithmeticableCollection<Rational>();
            rationalCollection.addArithmeticable(new Rational(1, 2));
            rationalCollection.addArithmeticable(new Rational(1, 2));
            const result = new Rational(1, 4);
            const multiply = rationalCollection.getArithmeticable(0).multiply(rationalCollection.getArithmeticable(1))
            expect(multiply.getValue).to.equal(result.getValue); 
        });

        it("should be able to divide items to the collection", () => {
            const rationalCollection = new ArithmeticableCollection<Rational>();
            rationalCollection.addArithmeticable(new Rational(2, 1));
            rationalCollection.addArithmeticable(new Rational(1, 1));
            const result = new Rational(2, 1);
            const divide = rationalCollection.getArithmeticable(0).divide(rationalCollection.getArithmeticable(1))
            expect(divide.getValue).to.equal(result.getValue); 
        });
    });


    /* describe("ArithmeticableCollection of Complex", () => {
        const complex: Complex = new Complex(1, 2);
        
        it("should be able to add items", () => {
            const complexCollection = new ArithmeticableCollection<Complex>();
            complexCollection.addArithmeticable(new Complex(2, 3));
            complexCollection.addArithmeticable(new Complex(4, 5));
            console.log(complexCollection.getArithmeticable(0).add(complexCollection.getArithmeticable(1)));
        });

        it("should be able to substract items", () => {
            const complexCollection = new ArithmeticableCollection<Complex>();
            complexCollection.addArithmeticable(new Complex(2, 3));
            complexCollection.addArithmeticable(new Complex(4, 5));
            console.log(complexCollection.getArithmeticable(0).add(complexCollection.getArithmeticable(1)));
        });
        
        it("should be able to multiply items", () => {
            const rationalCollection = new ArithmeticableCollection<Rational>();
            rationalCollection.addArithmeticable(new Rational(1, 2));
            rationalCollection.addArithmeticable(new Rational(1, 2));
            const result = new Rational(1, 4);
            const multiply = rationalCollection.getArithmeticable(0).multiply(rationalCollection.getArithmeticable(1))
            expect(multiply.getValue).to.equal(result.getValue); 
        });

        it("should be able to divide items to the collection", () => {
            const rationalCollection = new ArithmeticableCollection<Rational>();
            rationalCollection.addArithmeticable(new Rational(2, 1));
            rationalCollection.addArithmeticable(new Rational(1, 1));
            const result = new Rational(2, 1);
            const divide = rationalCollection.getArithmeticable(0).divide(rationalCollection.getArithmeticable(1))
            expect(divide.getValue).to.equal(result.getValue); 
        });
    }); */
});
