import { describe, it } from 'mocha';
import { expect } from "chai";
import {getAllergens, Allergen} from "../src/ejercicio01";

describe("getAllergens", () => {
  it("should return [Huevo, Gato] when given 129", () => {
    const result = getAllergens(129);
    expect(result).to.deep.equal([Allergen.Huevo, Allergen.Gato]);
  });

  it("should return [Huevo] when given 257", () => {
    const result = getAllergens(257);
    expect(result).to.deep.equal([Allergen.Huevo]);
  });

  it("should return [] when given 256", () => {
    const result = getAllergens(256);
    expect(result).to.deep.equal([]);
  });

  it("should return [Huevo, Cacahuete] when given 515", () => {
    const result = getAllergens(515);
    expect(result).to.deep.equal([Allergen.Huevo, Allergen.Cacahuete]);
  });

  it("should return [Marisco, Tomate, Polen] when given 84", () => {
    const result = getAllergens(84);
    expect(result).to.deep.equal([Allergen.Marisco, Allergen.Tomate, Allergen.Polen]);
  });

  it("should return undefined when given a non-positive integer value", () => {
    const result = getAllergens(-1);
    expect(result).to.be.undefined;
  });

  it("should return undefined when given a non-integer value", () => {
    const result = getAllergens(3.14);
    expect(result).to.be.undefined;
  });
});
