import { describe, it } from 'mocha';
import { expect } from "chai";
import { ComplexNumber, add, sub, mult, div, prod, conj, abs } from '../src/ejercicio02';

describe('add', () => {
  it('should add two complex numbers', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: ComplexNumber = { real: 1, imaginary: 4 };
    const expected: ComplexNumber = { real: 3, imaginary: 7 };
    const result: ComplexNumber = add(a, b);
    expect(result).to.deep.equal(expected);
  });
});

describe('sub', () => {
  it('should subtract two complex numbers', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: ComplexNumber = { real: 1, imaginary: 4 };
    const expected: ComplexNumber = { real: 1, imaginary: -1 };
    const result: ComplexNumber = sub(a, b);
    expect(result).to.deep.equal(expected);
  });
});

describe('mult', () => {
  it('should multiply two complex numbers', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: ComplexNumber = { real: 1, imaginary: 4 };
    const expected: ComplexNumber = { real: -10, imaginary: 11 };
    const result: ComplexNumber = mult(a, b);
    expect(result).to.deep.equal(expected);
  });
});

describe('div', () => {
  it('should divide two complex numbers', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: ComplexNumber = { real: 1, imaginary: 4 };
    const expected: ComplexNumber = { real: 0.82, imaginary: -0.29 };
    const result: ComplexNumber = div(a, b);
    expect(result.real).to.be.closeTo(expected.real, 0.01);
    expect(result.imaginary).to.be.closeTo(expected.imaginary, 0.01);
  });
});

describe('prod', () => {
  it('should multiply a complex number by a real number', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: number = 2;
    const expected: ComplexNumber = { real: 4, imaginary: 6 };
    const result: ComplexNumber = prod(a, b);
    expect(result).to.deep.equal(expected);
  });
});

describe('conj', () => {
  it('should return the conjugate of a complex number', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const expected: ComplexNumber = { real: 2, imaginary: -3 };
    const result: ComplexNumber = conj(a);
    expect(result).to.deep.equal(expected);
  });
});

describe('abs', () => {
  it('should return the absolute value of a complex number', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const expected: number = 3.605;
    const result: number = abs(a);
    expect(result).to.be.closeTo(expected, 0.01);
  });
});

