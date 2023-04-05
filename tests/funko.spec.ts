import { describe, it } from 'mocha';
import { assert } from "chai";
import { Funko, FunkoType, FunkoGenre } from "../src/code/funko";

describe('Funko', function() {
  const funko = new Funko(
    1,
    'Harry Potter',
    'A Funko Pop figure of Harry Potter',
    FunkoType.POP,
    FunkoGenre.MOVIES_AND_TV,
    'Harry Potter',
    1,
    false,
    'Glow in the dark',
    20.99
  );

  it('should return the correct id', function() {
    assert.equal(funko.getId(), 1);
  });

  it('should return the correct name', function() {
    assert.equal(funko.getName(), 'Harry Potter');
  });

  it('should return the correct description', function() {
    assert.equal(funko.getDescription(), 'A Funko Pop figure of Harry Potter');
  });

  it('should return the correct type', function() {
    assert.equal(funko.getType(), FunkoType.POP);
  });

  it('should return the correct genre', function() {
    assert.equal(funko.getGenre(), FunkoGenre.MOVIES_AND_TV);
  });

  it('should return the correct franchise', function() {
    assert.equal(funko.getFranchise(), 'Harry Potter');
  });

  it('should return the correct number', function() {
    assert.equal(funko.getNumber(), 1);
  });

  it('should return the correct exclusive status', function() {
    assert.equal(funko.isExclusive(), false);
  });

  it('should return the correct special features', function() {
    assert.equal(funko.getSpecialFeatures(), 'Glow in the dark');
  });

  it('should return the correct market value', function() {
    assert.equal(funko.getMarketValue(), 20.99);
  });
});
