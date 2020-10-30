import { useEffect, useState } from "react";
import getPokemon from "../helpers/GetPokemon";
import PokeGridItem from "./PokeGridItem";

const PokeGrid = ({ pokemon }) => {
  const [pokeInfo, setPokeInfo] = useState({});

  useEffect(() => {
    getPokemon(pokemon).then((resp) => {
        console.log('ver resp', resp);
        setPokeInfo(resp)});
  }, [pokemon]);

  return (
    <>
      {/* <h3>{pokemon}</h3> */}
      <div className="card-grid">
        <PokeGridItem pokeInfo={pokeInfo}></PokeGridItem>
      </div>
    </>
  );
};

export default PokeGrid;
