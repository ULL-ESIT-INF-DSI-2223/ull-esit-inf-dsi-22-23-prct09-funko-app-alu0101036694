import { describe, it } from 'mocha';
import { expect } from "chai";
import { decodeResistor } from "../src/ejercicio07";

describe("decodeResistor", () => {
  it("should return 15 when given ['marrón', 'verde']", () => {
    const result = decodeResistor(["marrón", "verde"]);
    expect(result).to.equal(15);
  });

  it("should return 15 when given ['marrón', 'verde', 'violeta']", () => {
    const result = decodeResistor(["marrón", "verde", "violeta"]);
    expect(result).to.equal(15);
  });

  it("should return 29 when given ['rojo', 'blanco']", () => {
    const result = decodeResistor(["rojo", "blanco"]);
    expect(result).to.equal(29);
  });

  it("should return 36 when given ['naranja', 'azul']", () => {
    const result = decodeResistor(["naranja", "azul"]);
    expect(result).to.equal(36);
  });
});
