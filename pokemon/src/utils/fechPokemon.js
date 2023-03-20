export const getAllPokemon = async() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?&limit=20'
    const res = await fetch(url)
    const data = await res.json()
    
    const promises = data.results.map(async(pokemon) => {
        const res= await fetch(pokemon.url)
        const data = await res.json()
        return data
    })
    const results = await Promise.all(promises)
    return results  
}