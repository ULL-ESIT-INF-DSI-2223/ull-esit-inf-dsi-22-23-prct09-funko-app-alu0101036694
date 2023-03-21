import { describe, it } from 'mocha';
import { expect } from "chai";
import * as Prompt from 'prompt-sync';
import { BubbleSortStrategy } from '../src/bubbleSort';
import { MergeSortStrategy } from '../src/mergeSort';
import { SortingInterface } from "../src/interface";
import { SortingContext } from '../src/modificacion01';

// BubbleSortStrategy tests

describe('BubbleSortStrategy', () => {
    it('should return an empty array when sorting an empty array', () => {
      const arr = [];
      const strategy = new BubbleSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([]);
    });
  
    it('should return the same array when sorting an array with one element', () => {
      const arr = [1];
      const strategy = new BubbleSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1]);
    });
  
    it('should return the same array when sorting an array with two already sorted elements', () => {
      const arr = [1, 2];
      const strategy = new BubbleSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1, 2]);
    });
  
    it('should sort an array of two elements in reverse order', () => {
      const arr = [2, 1];
      const strategy = new BubbleSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1, 2]);
    });
  
    it('should sort an array of three elements', () => {
      const arr = [3, 2, 1];
      const strategy = new BubbleSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1, 2, 3]);
    });
  
    it('should sort an array of five elements', () => {
      const arr = [5, 1, 4, 2, 3];
      const strategy = new BubbleSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  // MergeSortStrategy tests

  describe('MergeSortStrategy', () => {
    it('should return an empty array when sorting an empty array', () => {
      const arr = [];
      const strategy = new MergeSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([]);
    });
  
    it('should return the same array when sorting an array with one element', () => {
      const arr = [1];
      const strategy = new MergeSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1]);
    });
  
    it('should return the same array when sorting an array with two already sorted elements', () => {
      const arr = [1, 2];
      const strategy = new MergeSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1, 2]);
    });
  
    it('should sort an array of two elements in reverse order', () => {
      const arr = [2, 1];
      const strategy = new MergeSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1, 2]);
    });
  
    it('should sort an array of three elements', () => {
      const arr = [3, 2, 1];
      const strategy = new MergeSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1, 2, 3]);
    });
  
    it('should sort an array of five elements', () => {
      const arr = [5, 1, 4, 2, 3];
      const strategy = new MergeSortStrategy();
      const sortedArr = strategy.sort(arr);
      expect(sortedArr).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });