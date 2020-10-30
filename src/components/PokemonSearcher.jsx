import { useEffect, useState } from 'react';
import getPokemon from '../helpers/GetPokemon';

const PokemonSearcher = () => {

    const [pokemon, setPokemon] = useState('pikachu');
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
   
    useEffect(() => {

        getPokemon(pokemon).then((resp) => {
            console.log('ver resp xd', resp);
            setPokemon(resp)
        });
      }, []);
    //   pokemon

    return (
        <div>
            Hola desde searcher
        </div>
    )
}


export default PokemonSearcher