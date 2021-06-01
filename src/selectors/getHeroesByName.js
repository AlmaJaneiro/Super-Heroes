import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '') => {

    if( name === ''){
        return[]
    }
    //esto nos sirve para que el strring se vaya a minusculas
    name = name.toLocaleLowerCase();
    //esto nos sirve para que el strring se vaya a minusculas
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name) )
}