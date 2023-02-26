import { describe, it } from 'mocha';
import { expect } from "chai";
import { fromArrayToRanges, fromRangesToArray } from "../src/ejercicio06";

describe("fromArrayToRanges function", () => {
    it("should return an empty string for an empty array", () => {
      const arr: number[] = [];
      const result = fromArrayToRanges(arr);
      expect(result).to.equal("");
    });
  
    it("should compress the array into a string of ranges", () => {
      const arr = [5, 6, 7, 9, 12, 13, 14];
      const expected = "5_7, 9, 12_14";
      const result = fromArrayToRanges(arr);
      expect(result).to.equal(expected);
    });
  
    it("should handle negative numbers", () => {
      const arr = [-3, -2, -1, 3, 5, 6, 7];
      const expected = "-3_-1, 3, 5_7";
      const result = fromArrayToRanges(arr);
      expect(result).to.equal(expected);
    });
  
    it("should handle a single number", () => {
      const arr = [17];
      const expected = "17";
      const result = fromArrayToRanges(arr);
      expect(result).to.equal(expected);
    });
  
    it("should compress the array with multiple ranges", () => {
      const arr = [3, 5, 6, 7, 9, 10];
      const expected = "3, 5_7, 9_10";
      const result = fromArrayToRanges(arr);
      expect(result).to.equal(expected);
    });
  });
  
describe("fromRangesToArray function", () => {
    it("should return an empty array for an empty string", () => {
      const ranges = "";
      const result = fromRangesToArray(ranges);
      expect(result).to.deep.equal([]);
    });
  
    it("should expand a string of ranges into an array", () => {
      const ranges = "5_7, 9, 12_14";
      const expected = [5, 6, 7, 9, 12, 13, 14];
      const result = fromRangesToArray(ranges);
    });
});