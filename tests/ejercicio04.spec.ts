import { describe, it } from 'mocha';
import { expect } from "chai";
import { myMap } from '../src/ejercicio04';

describe("myMap", () => {
    it("should return an empty array when given an empty array", () => {
      const result = myMap([], (num) => num * num);
      expect(result).to.deep.equal([]);
    });
  
    it("should return a new array with the values squared", () => {
      const arr = [0, 1, 2, 3, 4];
      const result = myMap(arr, (num) => num * num);
      expect(result).to.deep.equal([0, 1, 4, 9, 16]);
      expect(arr).to.deep.equal([0, 1, 2, 3, 4]); // Ensure the original array is not modified
    });
  
    it("should return a new array with the values doubled", () => {
      const arr = [1, 2, 3];
      const result = myMap(arr, (num) => num * 2);
      expect(result).to.deep.equal([2, 4, 6]);
      expect(arr).to.deep.equal([1, 2, 3]); // Ensure the original array is not modified
    });
  });
  
