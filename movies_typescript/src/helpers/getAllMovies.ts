interface moviesProps {
  id: number;
  name: string;
  image: {
    medium: string;
  };
}

export const getAllMovies = async () => {
  const url = "https://api.tvmaze.com/shows";
  const resp = await fetch(url);
  const data = await resp.json();

  const movies = data.map((movie: moviesProps) => ({
    id: movie.id,
    title: movie.name,
    image: movie.image.medium,
  }));

  return movies;
};
