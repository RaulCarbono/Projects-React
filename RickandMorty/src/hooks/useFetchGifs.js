import { useEffect, useState } from "react";
import { getGifs } from "../utils/getGifs";

export const useFetchGifs = (category) => {

    const [img, setImg] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImg(newImages);
      setIsLoading(false)
    };
  
    useEffect(() => {
      getImages();
    }, []);
  


  return {
    images: img,
    isLoading
  }
}