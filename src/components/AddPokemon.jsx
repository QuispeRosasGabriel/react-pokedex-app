import { useState } from "react";

const AddPokemon = ({setPokemon}) => {
const [inputValue, setinputValue] = useState("");

const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
     setPokemon(inputValue);
     setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Busca un Pokémon"
        />
      </label>
    </form>
  );
};

export default AddPokemon;
