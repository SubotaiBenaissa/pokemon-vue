
const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonOptions = () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5)
    getPokemonNames(mixedPokemons.splice(0,4))
}

const getPokemonNames = ([pok1, pok2, pok3, pok4] = []) => {
    console.log(pok1, pok2, pok3, pok4)
}

export default getPokemonOptions