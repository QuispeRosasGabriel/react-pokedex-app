import React from 'react'
import PokeSquare from '../styled-components/PokeSquare'

const PokeGridItem = ({pokeInfo}) => {
        console.log("pokeInfo", pokeInfo)

     return (
        <PokeSquare>
           <h1> {pokeInfo.name}</h1>
           <img src={pokeInfo.sprites?.front_default} alt=""/> 
           {pokeInfo.types?.map((val) => <li key={pokeInfo.id}>{val.type.name}</li>)}
        </PokeSquare>
    )
}

export default PokeGridItem
