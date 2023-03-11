export const CardsPokemon = ({data}) => {
  return (
    <>
    
    <div className="principal_container">
        {data.map((i, key)=> (
        <>
        <div className="card_container">
         <div className="card_title">
        <h2>{i.name}</h2>
        </div>
        <div className="card_content">
          <img src={i.sprites.other.dream_world.front_default} alt="" />
        </div>
        </div>
        </>
        ))}
        </div>
        </>

    
  )
}