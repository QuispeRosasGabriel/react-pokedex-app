import { useEffect, useState } from "react";
import getPokemon from "../helpers/GetPokemon";
import PokeInfoItem from "./PokeInfoItem";
import Error from '../styled-components/Error';

const PokeInfo = ({ pokemon }) => {
  const [pokeInfo, setPokeInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    getPokemon(pokemon).then((resp) => {
      setError(false);
      setPokeInfo(resp)
    })
      .catch((err) => setError(true));
  }, [pokemon]);

  return (
    <>
      {error ? <Error>No se encontraron pokémon con ese nombre</Error> :
       <div className="card-pokemon">
        <PokeInfoItem pokeInfo={pokeInfo}></PokeInfoItem>
      </div>
      }
    </>
  );
};

export default PokeInfo;
