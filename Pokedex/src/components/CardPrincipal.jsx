import { useState, useEffect } from "react"
import { getPokemons } from "../helpers/petitionAxios"
import { getPokemonsSpecific } from "../helpers/petitionAxios"


export const CardPrincipal = () => {
    const [pokemons, setPokemons] = useState()
    getPokemonsSpecific()
    useEffect(() => {
      const fecthPokemon = async() => {
       const pokemonData = await getPokemons();
        setPokemons(pokemonData) 
      }
      fecthPokemon()
    }, [])
    

    console.log(pokemons)
  return (
    <div className='container-card'>
        <div className="container_cards">
            <div className="title-card">
            </div>
                <div>
                    <img src={""} alt="image-card" />
                </div>
            <footer className="footer-card"></footer>
        </div>
        </div>
  )
}
