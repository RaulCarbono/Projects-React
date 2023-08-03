import { pokemonApi } from '../api/pokemonApi';

export const getPokemons = async () => {
  const resp = await pokemonApi.get('pokemon?limit=100000&offset=0');
  console.log(resp);
};
