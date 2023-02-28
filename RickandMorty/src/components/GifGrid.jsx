import React, { useState,useEffect } from 'react'
import { getGifs } from '../utils/getGifs';

export const GifGrid = ({category}) => {
  
  const [hola,setHola] = useState([]);

  // const getImages = async() => {
  //   const newImages = await getGifs(category)
  //   setHola(newImages);
  // }

  const handleChange = async () => {
    const image = await getGifs(category)
    setHola(image);
  }

  // useEffect( () => {
  //   getImages()
  // },[] )
 
  console.log(hola)
  return (
    <>
        <h3>{category}</h3>

        <button onclick={handleChange} >hola</button>
        {/* <ol>

          {images?.map( img => (
            <li key={img.id}>{img.title}</li>
          ))}
        </ol> */}
        
    </>
  )
}
