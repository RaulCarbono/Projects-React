import React from "react";

export const Sidebar = () => {
  return (
    <div className="container_sidebar">
      <nav> 
     
        <input className="search" type="text" />
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        <ul>
            <span className="allpokemon">All</span> 
            <br/>
          <span className="generationPokemon">Generation</span>
          <br/>
          <span>Favorites</span>
          <br />
          <span>Type charts</span>
        </ul>
      </nav>
    </div>
  );
};
