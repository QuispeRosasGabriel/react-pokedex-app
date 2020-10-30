import axios from "axios";

const getPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(pokemon)}`;
  const resp = await axios.get(url);
  const { data } = await resp;
  console.log("esta es data", data);
  const pokemonInfo = await data;
  console.log("ver pokemon info", pokemonInfo);

  return pokemonInfo;
};

export default getPokemon;
