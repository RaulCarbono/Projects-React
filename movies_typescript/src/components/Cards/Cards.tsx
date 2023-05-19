import { CardsStyled } from "./CardsStyled";

const Cards = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <CardsStyled>{movie.title}</CardsStyled>
      ))}
    </>
  );
};
export default Cards;
