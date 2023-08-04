import { useState, useEffect } from "react"
import axios from "axios"



export const CardPrincipal = ({pokemons }) => {
    const [image, setImage] = useState ()
    const [ type, setType]  = useState ()
    const [colorType, setColorType] = useState () 

    useEffect(() => {
      handleSetter()
    }, [])

    
    console.log(pokemons)
  
    const handleSetter = async () => {
        const pokedata = await axios.get(pokemons.url)
        setColorType(pokedata.data.types[0].type.name)
        setType(pokedata.data.types)
        setImage(pokedata.data.sprites.other.dream_world.front_default)
    }

  return (
    <div className='container-card'>
        <div className="container_cards">
            <div className="title-card">
                {}
            </div>
                <div>
                    <img src={""} alt="image-card" />
                </div>
            <footer className="footer-card"></footer>
        </div>
        </div>
  )
}
