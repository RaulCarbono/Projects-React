import { useEffect, useState } from "react";
import "../src/styles/App.scss";
import Cards from "./components/Cards/Cards";
import { Nabvar } from "./components/nabvar/Nabvar";
import { getAllMovies } from "./helpers/getAllMovies";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const shows = await getAllMovies();
      setMovies(shows);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="grid-container">
        <nav className="header">
          <Nabvar />
        </nav>

        <div className="main">
          <Cards movies={movies} />
        </div>
        <section className="sidebar">Hola </section>
        <div className="footer">hola</div>
      </div>
    </>
  );
}

export default App;
