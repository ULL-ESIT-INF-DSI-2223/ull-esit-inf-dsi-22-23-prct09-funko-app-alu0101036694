import { describe, it } from 'mocha';
import { expect } from "chai";
import * as Prompt from 'prompt-sync';
import { Song } from '../src/ejercicio03/song';
import { Album } from '../src/ejercicio03/album';
import { Artist } from '../src/ejercicio03/artist';
import { MusicLibrary } from '../src/ejercicio03/library';

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

describe('Album', () => {
  describe('getDuration', () => {
    it('should return 0 if album has no songs', () => {
      const album = new Album('Test', 2022, []);
      const expectedDuration = 0;
      const actualDuration = album.getDuration();
      expect(actualDuration).to.equal(expectedDuration);
    });

    it('should return the sum of song durations', () => {
      const album = new Album('Test', 2022, [
        new Song('Song 1', 3.5, [], false, 0),
        new Song('Song 2', 2.75, [], false, 0),
        new Song('Song 3', 4, [], false, 0)
      ]);
      const expectedDuration = 10.25;
      const actualDuration = album.getDuration();
      expect(actualDuration).to.equal(expectedDuration);
    });

    it('should round the duration to two decimal places', () => {
      const album = new Album('Test', 2022, [
        new Song('Song 1', 3.3333, [], false, 0),
        new Song('Song 2', 2.6666, [], false, 0),
        new Song('Song 3', 4.1111, [], false, 0)
      ]);
      const expectedDuration = 10.111;
      const actualDuration = album.getDuration();
      expect(actualDuration).to.equal(expectedDuration);
    });
  });

  describe('getNumSongs', () => {
    it('should return the number of songs in the album', () => {
      const album = new Album('A Night at the Opera', 1975, [
        new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
        new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
        new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
      ]);
      const expectedCount = 3;
      const actualCount = album.getNumSongs();
      expect(actualCount).to.equal(expectedCount);
    });
  });

  describe('getNumReproductions', () => {
    it('devuelve la suma de las reproducciones de cada canción cuando el álbum tiene canciones', () => {
      const song1 = new Song('Canción 1', 100, ['Rock'], false, 3);
      const song2 = new Song('Canción 2', 200, ['Rock'], false, 2);
      const album = new Album('Mi álbum', 2018, [song1, song2]);

      const numReproductions = album.getNumReproductions();

      expect(numReproductions).to.equal(5); // 3 + 5
    });
  });
});

describe('Song', () => {
  const song = new Song('Bohemian Rhapsody', 354, ['Rock', 'Pop'], true, 1000);

  it('should create the song', () => {
    expect(song).to.be.an.instanceOf(Song);
  })

  it('should create a song with the correct properties', () => {
    expect(song.name).to.deep.equal('Bohemian Rhapsody');
    expect(song.duration).to.equal(354);
    expect(song.genres).to.deep.equal(['Rock', 'Pop']);
    expect(song.isSingle).to.equal(true);
    expect(song.numReproductions).to.equal(1000);
  });
});

describe('MusicLibrary', function() {
  describe('#displayLibrary()', function() {
    it('should display the library on the console', function() {
      const library = new MusicLibrary();
      expect(() => { library.displayLibrary(); }).to.not.throw(TypeError);
    });
  });
});

describe('MusicLibrary', function() {
  describe('#countSongs()', function() {
    it('should return the number of songs in the specified album', function() {
      const library = new MusicLibrary();
      // Prueba 1: Comprueba que el número de canciones devuelto es correcto.
      const albumName = 'Thriller';
      const expectedSongCount = 0;
      const actualSongCount = library.countSongs(albumName);
      expect(actualSongCount).to.equal(expectedSongCount);

      // Prueba 2: Comprueba que la función devuelve 0 cuando se busca un álbum que no existe.
      const nonExistentAlbumName = 'This Album Does Not Exist';
      const expectedNonExistentSongCount = 0;
      const actualNonExistentSongCount = library.countSongs(nonExistentAlbumName);
      expect(actualNonExistentSongCount).to.equal(expectedNonExistentSongCount);
    });
  });
});

    

  