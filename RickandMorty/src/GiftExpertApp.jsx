import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon ball z",
    "Naruto",
  ]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories((cat) => [...cat, newCategory]);
    // console.log(newCategory);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
