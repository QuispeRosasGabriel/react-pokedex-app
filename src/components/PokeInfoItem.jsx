import React from "react";
import PokeSprite from "../styled-components/PokeSprite";
import PokeSquare from "../styled-components/PokeSquare";

const PokeInfoItem = ({ pokeInfo }) => {

  return (
    <>
     <h1> {(pokeInfo.name)?.toUpperCase()}</h1>
      <PokeSquare>
        <PokeSprite src={pokeInfo.sprites?.front_default} alt="Pokemon"  />
        <div>
          <p><strong>Número de Pokédex: </strong> {pokeInfo.order}</p>
          <div className="type-box">
          <strong>Tipo: </strong>
          {pokeInfo.types?.map((val) => (
            <li className="list-type" key={pokeInfo.id + Math.random()}>
               {val.type.name}
            </li>
          ))}
          </div>
          <p><strong>Peso:</strong> {pokeInfo.weight / 10} Kg</p>
          <p><strong>Altura:</strong> {pokeInfo.height / 10} Metros</p>
        </div>
      </PokeSquare>
    </>
  );
};

export default PokeInfoItem;
