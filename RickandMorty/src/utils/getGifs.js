export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=O8dW25J3yVOI7h8y3Awaji38x37KEQWe&q=${category}&limit=10`;
    const resp = await fetch(url)
    const {data} = await resp.json()
  
    const gifs = data.map( img => ({
      id:img.id,
      title : img.title, 
      url: img.images.downsized_medium.url
    }));
    return gifs
  }