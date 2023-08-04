import axios from 'axios';
import { pokemonApi } from '../api/pokemonApi';

export const getPokemons = async () => {
  const resp = await pokemonApi.get('pokemon?limit=100000&offset=0');
  return(resp.data.results);
};

export const getPokemonsSpecific = async () => {
  const respuesta = await getPokemons();
  const resp = await respuesta[0]
  console.log(resp)
}
