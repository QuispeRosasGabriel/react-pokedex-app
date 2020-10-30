import { useState } from "react";
import AddPokemon from "./AddPokemon";
import PokeInfo from "./PokeInfo";
import pokeball from "../assets/pokeball.png";

const PokemonSearcher = () => {
  const [pokemon, setPokemon] = useState("pikachu");

  return (
    <>
      <div className="header-container">
        <img src={pokeball} className="App-logo" />
        <h1>Pokedex App</h1>
      </div>
      <br />
      <AddPokemon setPokemon={setPokemon} />
      <hr />
      <PokeInfo pokemon={pokemon}></PokeInfo>
    </>
  );
};

export default PokemonSearcher;
