import { useState } from "react";
import PokeInput from "../styled-components/PokeInput";

const AddPokemon = ({ setPokemon }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    const formatedData = (e.target.value).toLowerCase();
    setinputValue(formatedData);
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
        <PokeInput
          type="text"
          onChange={handleInputChange}
          placeholder="Busca un Pokémon..."
          value={inputValue}
        />
      </label>
    </form>
  );
};

export default AddPokemon;
