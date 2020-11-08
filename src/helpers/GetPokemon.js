import axios from "axios";

const getPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(pokemon)}`;
  const resp = await axios.get(url);
  const { data } = await resp;
  const pokemonInfo = await data;
  return pokemonInfo;
};

export default getPokemon;
