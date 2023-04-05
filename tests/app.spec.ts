import { describe, it } from 'mocha';
import { assert, expect } from "chai";
import { Funko, FunkoType, FunkoGenre } from "../src/code/funko";
import { Coleccionista } from "../src/code/coleccionista";

    describe('addFunko', () => {
      it('should add a new Funko to the user collection', () => {
        const type: FunkoType = FunkoType.POP;
        const genre: FunkoGenre = FunkoGenre.ANIME;
        const user = new Coleccionista(1, 'John Doe', []);
        const funko =  new Funko(1, "Batman", "Funko of Batman", type, genre, "Batman", 1, false, "[]", 100);
        user.addFunko(funko);
        
        expect(user.getColeccion()).to.deep.equal([funko]);
      });
    });

    describe('modificarFunko', () => {
        it('should modify a funko from the user collection', () => {
            const type: FunkoType = FunkoType.POP;
            const genre: FunkoGenre = FunkoGenre.ANIME;
            const funko =  new Funko(1, "Batman", "Funko of Batman", type, genre, "Batman", 1, false, "[]", 100);
            const funko2 =  new Funko(1, "Superman", "Funko of Superman", type, genre, "Superman", 1, false, "[]", 150);
            const user = new Coleccionista(1, 'John Doe', [funko]);
            user.addFunko(funko);
            user.modificarFunko(funko2);
            
            expect(user.getColeccion()).to.deep.equal([funko2]);
        });
    });


    describe('removeFunko', () => {
        it('should remove a funko from the user collection', () => {
            const type: FunkoType = FunkoType.POP;
            const genre: FunkoGenre = FunkoGenre.ANIME;
            const funko =  new Funko(1, "Batman", "Funko of Batman", type, genre, "Batman", 1, false, "[]", 100);
            const funko2 =  new Funko(2, "Superman", "Funko of Superman", type, genre, "Superman", 1, false, "[]", 150);
            const user = new Coleccionista(1, 'John Doe', [funko, funko2]);
            user.eliminarFunko(funko.getId());
            
            expect(user.getColeccion()).to.deep.equal([funko2]);
        });
    });
      
    describe('listarColeccion', () => {
        it('should return the user collection', () => {
            const type: FunkoType = FunkoType.POP;
            const genre: FunkoGenre = FunkoGenre.ANIME;
            const funko =  new Funko(1, "Batman", "Funko of Batman", type, genre, "Batman", 1, false, "[]", 100);
            const funko2 =  new Funko(2, "Superman", "Funko of Superman", type, genre, "Superman", 1, false, "[]", 150);
            const user = new Coleccionista(1, 'John Doe', [funko, funko2]);
            
            //expect(user.listarColeccion()).to.deep.equal([funko, funko2]);
        });
    }
    );

    describe('mostrarFunko', () => {
        it('should return the funko with the given id', () => {
            const type: FunkoType = FunkoType.POP;
            const genre: FunkoGenre = FunkoGenre.ANIME;
            const funko =  new Funko(1, "Batman", "Funko of Batman", type, genre, "Batman", 1, false, "[]", 100);
            const funko2 =  new Funko(2, "Superman", "Funko of Superman", type, genre, "Superman", 1, false, "[]", 150);
            const user = new Coleccionista(1, 'John Doe', [funko, funko2]);
            
            //expect(user.mostrarFunko(1)).to.deep.equal(funko);
        });
    }
    );