import { describe, it } from 'mocha';
import { expect } from "chai";
import * as Prompt from 'prompt-sync';
import { Song } from '../src/ejercicio01/song';
import { Album } from '../src/ejercicio01/album';
import { Artist } from '../src/ejercicio01/artist';
import { MusicLibrary } from '../src/ejercicio01/library';

describe('MusicLibrary', () => {
    describe('addArtist', () => {
        it('should add an artist to the library', () => {
            const library = new MusicLibrary();
            const artist: Artist = {name:'Queen', monthlyListeners:1000000, discography:[
                new Album('A Night at the Opera', 1975, [
                new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
                new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
                new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
                ]),
            ]};
            library.addArtist(artist);
            expect(library.artists).to.deep.equal([artist]);
        });
    });

    describe('countSongs', () => {
        it('should count the number of songs in an album', () => {
          const library = new MusicLibrary();
          const artist: Artist = {
            name: 'Queen',
            monthlyListeners: 1000000,
            discography: [
              new Album('A Night at the Opera', 1975, [
                new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
                new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
                new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
              ]),
            ],
          };
          library.addArtist(artist);
          library.countSongs('A Night at the Opera');
          const expectedCount = 3;
          const actualCount = artist.discography[0].songs.length;
          expect(actualCount).to.equal(expectedCount);
        });
      });

      describe('calculateDuration', () => {
        it('should count the duration of the album', () => {
          const library = new MusicLibrary();
          const artist: Artist = {
            name: 'Queen',
            monthlyListeners: 1000000,
            discography: [
              new Album('A Night at the Opera', 1975, [
                new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
                new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
                new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
              ]),
            ],
          };
          library.addArtist(artist);
          let actualCount = 0;
          const expectedCount = 11.98;
          actualCount = library.calculateDuration('A Night at the Opera');
          expect(actualCount).to.equal(expectedCount);
        });
      });

      describe('calculateReproductions', () => {
        it('should count the reproductions of the album', () => {
          const library = new MusicLibrary();
          const artist: Artist = {
            name: 'Queen',
            monthlyListeners: 1000000,
            discography: [
              new Album('A Night at the Opera', 1975, [
                new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
                new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
                new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
              ]),
            ],
          };
          library.addArtist(artist);
          let actualCount = 0;
          const expectedCount = 2250000;
          actualCount = library.calculateReproductions('A Night at the Opera');
          expect(actualCount).to.equal(expectedCount);
        });
      });


});

    

  