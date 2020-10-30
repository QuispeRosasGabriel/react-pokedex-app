import React from "react";
import PokeSprite from "../styled-components/PokeSprite";
import PokeSquare from "../styled-components/PokeSquare";

const PokeInfoItem = ({ pokeInfo }) => {
  console.log("pokeInfo", pokeInfo);

  return (
    <>
     <h1> {(pokeInfo.name)?.toUpperCase()}</h1>
      <PokeSquare>
        <PokeSprite src={pokeInfo.sprites?.front_default} alt="Pokemon"  />
        <div>
          <p>Número de Pokédex: {pokeInfo.order}</p>
          <div className="type-box">
          <p>Tipo: </p>
          {pokeInfo.types?.map((val) => (
            <li className="list-type" key={pokeInfo.id + Math.random()}>
               {val.type.name}
            </li>
          ))}
          </div>
          <p>Peso: {pokeInfo.weight / 10} Kg</p>
        </div>
      </PokeSquare>
    </>
  );
};

export default PokeInfoItem;
