import { useState } from "react";
import AddPokemon from "./AddPokemon";
import PokeInfo from "./PokeInfo";
import pokeball from "../assets/pokeball.png";

const PokemonSearcher = () => {
  const [pokemon, setPokemon] = useState("charizard");

  return (
    <>
      <div className="header-container">
        <img src={pokeball} className="App-logo" alt="poke-logo" />
        <div className="font-bold text-xl mb-2 ml-2">Pokédex App</div>
      </div>
      <br />
      <AddPokemon setPokemon={setPokemon} />
      <hr />
      <PokeInfo pokemon={pokemon}></PokeInfo>
    </>
  );
};

export default PokemonSearcher;
