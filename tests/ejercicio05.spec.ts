import { describe, it } from 'mocha';
import { expect } from "chai";
import { getSpiralMatrix } from '../src/ejercicio05';

describe('getSpiralMatrix function', () => {
  it('should return the correct spiral matrix for n=3', () => {
    const expected = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    const actual = getSpiralMatrix(3);
    expect(actual).to.deep.equal(expected);
  });

  it('should return the correct spiral matrix for n=4', () => {
    const expected = [
      [ 1,  2,  3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10,  9,  8 ,7]
    ];
    const actual = getSpiralMatrix(4);
    expect(actual).to.deep.equal(expected);
  });

  it('should return the correct spiral matrix for n=5', () => {
    const expected = [
      [ 1,   2,  3,  4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ];
    const actual = getSpiralMatrix(5);
    expect(actual).to.deep.equal(expected);
  });
});
