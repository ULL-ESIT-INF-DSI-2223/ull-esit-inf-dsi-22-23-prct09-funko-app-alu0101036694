import { describe, it } from 'mocha';
import { expect } from "chai";
import * as Prompt from 'prompt-sync';
import { BasicStreamableCollection, Series, Movies, Documentaries } from '../src/ejercicio01/ejercicio01';

describe('Series', () => {
  let series: Series;

  beforeEach(() => {
    series = new Series();
  });

  it('should be able to add and remove series', () => {
    const streamable = {
      id: '1',
      title: 'Stranger Things',
      description: 'A love letter to the supernatural classics of the 80s',
      genre: ['Drama', 'Fantasy', 'Horror'],
      rating: 8.7,
      releaseYear: 2016,
      getDuration: () => 60
    };
    series.addToCollection(streamable);
    expect(series.searchByName('stranger')).to.have.lengthOf(1);
    expect(series.searchByName('things')).to.have.lengthOf(1);
    series.removeFromCollection(streamable);
    expect(series.searchByName('stranger')).to.have.lengthOf(0);
    expect(series.searchByName('things')).to.have.lengthOf(0);
  });
});

describe('Movies', () => {
  let movies: Movies;

  beforeEach(() => {
    movies = new Movies();
  });

  it('should be able to add and remove movies', () => {
    const streamable = {
      id: '1',
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      genre: ['Drama'],
      rating: 9.3,
      releaseYear: 1994,
      getDuration: () => 142
    };
    movies.addToCollection(streamable);
    expect(movies.searchByName('shawshank')).to.have.lengthOf(1);
    expect(movies.searchByYear(1994)).to.have.lengthOf(1);
    movies.removeFromCollection(streamable);
    expect(movies.searchByName('shawshank')).to.have.lengthOf(0);
    expect(movies.searchByYear(1994)).to.have.lengthOf(0);
  });
});

describe('Documentaries', () => {
  let documentaries: Documentaries;

  beforeEach(() => {
    documentaries = new Documentaries();
  });

  it('should be able to add and remove documentaries', () => {
    const streamable = {
      id: '1',
      title: 'The Social Dilemma',
      description: 'Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.',
      genre: ['Documentary'],
      rating: 7.6,
      releaseYear: 2020,
      getDuration: () => 94
    };
    documentaries.addToCollection(streamable);
    expect(documentaries.searchByName('social dilemma')).to.have.lengthOf(1);
    expect(documentaries.searchByYear(2020)).to.have.lengthOf(1);
    documentaries.removeFromCollection(streamable);
    expect(documentaries.searchByName('social dilemma')).to.have.lengthOf(0);
    expect(documentaries.searchByYear(2020)).to.have.lengthOf(0);
  });
});