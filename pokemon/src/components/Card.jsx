export const Card = ({ allPokemons , key}) => {

  return (
    <div>
      <div className="container_card_principal" key={key}>
        <div className="container_title">
          <h1>Pokedex</h1>
        </div>
      
        <div className="bloque">
      
        {allPokemons.map((pokemon,key) => (
          <>
          <div className="container_card">
            <div className="title_card" key={key}>{pokemon.name}</div>
            <div className="content_card"> <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
              <div className="type_card">
                {pokemon.types?.map((i) => (
                  <span>{(i.type.name)}</span>
                ))}
              </div>
            </div>
            <footer> </footer>
            </div>
          </>
        ))}
        
      </div>
      </div>

      </div>
    
  );
};
