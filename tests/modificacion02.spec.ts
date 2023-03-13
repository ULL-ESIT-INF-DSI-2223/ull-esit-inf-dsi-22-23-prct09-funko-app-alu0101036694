import { describe, it } from 'mocha';
import { expect } from "chai";
import { RandomNumber,  RandomNumberSetCollection } from "../src/modificacion02";

describe("RandomNumberSetCollection", () => {
    
    describe("iteration", () => {
      it("should iterate over the set of random numbers", () => {
        const set = new RandomNumberSetCollection(10, 1, 10);
        const iterator = set[Symbol.iterator]();
  
        const values = Array.from(set);
  
        for (let i = 0; i < values.length; i++) {
          const result = iterator.next();
          expect(result.done).to.be.false;
          expect(result.value).to.be.equal(values[i]);
        }

        expect(iterator.next().done).to.be.true;
      });
    });

    describe("RandomNumber", () => {
        it("should return the same instance", () => {
            const randomNumber1 = RandomNumber.getInstance();
            const randomNumber2 = RandomNumber.getInstance();
            expect(randomNumber1).to.be.equal(randomNumber2);
        });
    });

    describe("RandomNumber.getFloat", () => {
        it("should return a number between 0 and 1", () => {
            const randomNumber = RandomNumber.getInstance();
            const result = randomNumber.getFloat();
            expect(result).to.be.greaterThan(0);
            expect(result).to.be.lessThan(1);
        });
    });


    describe("RandomNumber.getFloatRange", () => {
        it("should return a number between n and m", () => {
            const randomNumber = RandomNumber.getInstance();
            const result = randomNumber.getFloatRange(1, 10);
            expect(result).to.be.greaterThan(1);
            expect(result).to.be.lessThan(10);
        });
    });

    describe("RandomNumber.getIntRange", () => {
        it("should return an integer between n and m", () => {
            const randomNumber = RandomNumber.getInstance();
            const result = randomNumber.getIntRange(1, 10);
            expect(typeof(result)).to.be.eq("number");
            expect(result).to.be.greaterThan(1);
            expect(result).to.be.lessThan(10);
        });
    });





  });
  