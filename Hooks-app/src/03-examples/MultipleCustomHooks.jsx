import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character');
  return (
    <>
      <h1>Rick And Morty</h1>
      <hr />
    </>
  );
};
