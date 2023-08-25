export const petition = async () => {
    const url = "https://rickandmortyapi.com/api/character"
    const resp = await fetch(url)
    const data = await resp.json()
    

    const person = data.results.map((persona) => ({
        id : persona.id,
        name : persona.name,
        species : persona.species,
        image : persona.image,
        origin : persona.origin,
        episode: persona.episode
    }))

    return person
}