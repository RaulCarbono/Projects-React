import React from "react";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1 ) return;

    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim() )
    setInputValue('')
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};
