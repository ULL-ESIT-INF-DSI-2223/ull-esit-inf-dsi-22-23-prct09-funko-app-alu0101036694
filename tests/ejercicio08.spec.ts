import { describe, it } from 'mocha';
import { expect } from "chai";
import {meshArray} from "../src/ejercicio08";

describe("meshArray", () => {
  it("should return 'lowringter' when given ['allow', 'lowering', 'ringmaster', 'terror']", () => {
    const result = meshArray(["allow", "lowering", "ringmaster", "terror"]);
    expect(result).to.equal("lowringter");
  });

  it("should return 'Error al encadenar' when given ['kingdom', 'dominator', 'notorious', 'usual', 'allegory']", () => {
    const result = meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]);
    expect(result).to.equal("Error al encadenar");
  });

  it("should return 'ta' when given ['ta', 'ta']", () => {
    const result = meshArray(["ta", "ta"]);
    expect(result).to.equal("ta");
  });

  it("should return '' when given ['t', 'a']", () => {
    const result = meshArray(["t", "a"]);
    expect(result).to.equal("Error al encadenar");
  });
});
