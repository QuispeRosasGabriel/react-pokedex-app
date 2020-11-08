import React from "react";

const PokeInfoItem = ({ pokeInfo }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto mt-4">
        <img
          className="w-full"
          src={pokeInfo.sprites?.front_default}
          alt="Pokémon"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {pokeInfo.name?.toUpperCase()}
          </div>
          <div className="text-gray-700 text-base">
            <strong>Número de Pokédex: </strong> {pokeInfo.order}
            <p className="type-box">
              <strong>Tipo: </strong>
              {pokeInfo.types?.map((val) => (
                <li className="list-type" key={pokeInfo.id + Math.random()}>
                  {val.type.name}
                </li>
              ))}
            </p>
            
          <p><strong>Peso:</strong> {pokeInfo.weight / 10} Kg</p>
          <p><strong>Altura:</strong> {pokeInfo.height / 10} Metros</p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="pb-4">Habilidades</p>
          {pokeInfo.abilities?.map((ability) => (
          <span key={Math.random() + 100 * 20} 
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {ability.ability.name}
          </span>
          ))}
         
        </div>
      </div>
    </>
  );
};

export default PokeInfoItem;
