import { createContext, useState } from "react";
import { PokeType } from "../interfaces/types";
import axios from "axios"

interface ContextProps {
    types : PokeTypes[];
    filterSelected : PokeType;
    pokemonsFiltered : string[] | null
    changeTypeSelected : (type:PokeType) => void
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvider = ({children}: any) => {
    let allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

    const defaultState: PokeType = {
        name:"All",
        url : allPokemonUrl,
    };

    const [allPokemons, setAllPokemons] = useState(null)
    const [pokemonsFiltered, setPokemonsFiltered] = useState(null)

    const [types, setTypes] = useState([defaultState]);
    const [filterSelected, setFilterSeleted] = useState(defaultState)

    const getAllPokemons = async () => {
        const {data} = await axios.get(allPokemonUrl);

        let pokemons = data?.results.map(
            (pokemon : AllPokemonsResult) => pokemon?.url
        );

        setAllPokemons(pokemons);
        setFilterSeleted(pokemons);
    }

    return (
        <PokemonContext.Provider>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider