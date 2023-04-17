import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
// import { getAllPokemon } from './utils/getPokemon'
// import { CardsPokemon } from './components/CardsPokemon'


function App() {

  const [pokemon, setPokemon] = useState([])

// useEffect(() => {
//   getAllPokemon().then((datos) => setPokemon(datos))
// }, [])

const pokedata = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon?&limit=20")
  .then((response) => response.json())
  .then((res) =>{
    console.log(res)
  })
}

pokedata()

  return (
   <div className='App'>
    <div className='container'>
  <Sidebar />
    </div>
    
   </div>
  )
}

export default App
