import { Nabvar } from '../components/Nabvar';
import { Header } from '../components/Header';
import { CardPrincipal } from '../components/CardPrincipal';
import axios from 'axios';
import { useState,useEffect } from 'react';


export const Home = () => {
const [pokemons, setPokemons] = useState()

useEffect(() => {
  handlePokemons()
}, [])

  const handlePokemons = async () => {
    const allPokemons =  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    setPokemons(allPokemons.data.results)
  }
  

  return (
    <div className="principal-page">
      
      {/* <Nabvar /> */}
      <div className='container-header'>
      <Header />
      </div>  
      
      {
      pokemons.map((element, key) => (
      <CardPrincipal pokemons={element} key={key}/>
      )
      )}
      
    </div>
  );
};
