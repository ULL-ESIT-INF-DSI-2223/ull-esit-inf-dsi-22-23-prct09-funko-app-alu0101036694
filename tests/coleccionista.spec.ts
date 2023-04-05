import { describe, it } from 'mocha';
import { assert } from "chai";
import { Funko, FunkoType, FunkoGenre } from "../src/code/funko.js";
import { Coleccionista } from "../src/code/coleccionista.js";

describe("Coleccionista", function() {
  describe("#getId()", function() {
    it("should return the id of the collector", function() {
      const collector = new Coleccionista(1, "John", []);
      assert.strictEqual(collector.getId(), 1);
    });
  });

  describe("#getNombre()", function() {
    it("should return the name of the collector", function() {
      const collector = new Coleccionista(1, "John", []);
      assert.strictEqual(collector.getNombre(), "John");
    });
  });

  describe("#getColeccion()", function() {
    it("should return the collection of the collector", function() {
      const type: FunkoType = FunkoType.POP;
      const genre: FunkoGenre = FunkoGenre.ANIME;
      const funko1 = new Funko(1, "Batman", "Funko of Batman", type, genre, "Batman", 1, false, "[]", 100);
      const funko2 = new Funko(2, "Superman", "Funko of Superman", type, genre, "Superman", 1, false, "[]", 150);
      const collection = [funko1, funko2];
      const collector = new Coleccionista(1, "John", collection);
      assert.deepEqual(collector.getColeccion(), collection);
    });
  });
});
