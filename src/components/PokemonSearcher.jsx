import { useState } from 'react';
import AddPokemon from './AddPokemon';
import PokeGrid from './PokeGrid';

const PokemonSearcher = () => {

    const [pokemon, setPokemon] = useState('pikachu');

    return (
        <div>
            <h1>Pokedex App</h1>
            <br />
            <AddPokemon setPokemon={setPokemon} />
            <hr />
            <PokeGrid pokemon={pokemon} ></PokeGrid>
        </div>
    )
}


export default PokemonSearcher