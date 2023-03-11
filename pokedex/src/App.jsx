import './App.css'
import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { getAllPokemon } from './utils/getPokemon'
import { CardsPokemon } from './components/CardsPokemon'


function App() {

  const [pokemon, setPokemon] = useState([])

useEffect(() => {
  getAllPokemon().then((datos) => setPokemon(datos))
}, [])


  return (
   <div className='App'>
    <div className='container'>
      
      <Sidebar />
      <>
    <CardsPokemon data={pokemon}/>
    </>
    </div>
    
   </div>
  )
}

export default App
