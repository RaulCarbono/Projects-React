import React, { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { getAllPokemon } from "./utils/fechPokemon";
import { Card } from "./components/Card";

const App = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon().then((datos) => setAllPokemon(datos));
  }, []);

  return (
    <div className="container_principal">
      <Sidebar />

      <Card key={allPokemon.map((i) => i.id)} allPokemons={allPokemon} />
    </div>
  );
};

export default App;
