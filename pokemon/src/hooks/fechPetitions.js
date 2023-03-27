const getAllPokemon = async () => {
  const url = fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");

  const rest = await fetch(url);
  const data = await rest.json();

  const promises = data.results.map(async (i) => {
    const rest = await fetch(i.url);
    const data = await rest.json();
    return data;
  });
  const results = await Promise.all(promises);
  console.log(results);
};

getAllPokemon();
