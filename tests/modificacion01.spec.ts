import { describe, it } from 'mocha';
import { expect } from "chai";
import { mediaFilter } from "../src/modificacion01";

describe("mediaFilter", () => {
    it("should return [[3, 4, 5],[6, 7, 8],[9, 1, 2]]", () => {
        const result = mediaFilter([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]);
        expect(result).to.equal(
            [[3, 4, 5],
            [6, 7, 8],
            [9, 1, 2]]
        );
    });
  });
  

