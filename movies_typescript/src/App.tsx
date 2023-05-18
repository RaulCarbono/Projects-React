import "../src/styles/App.scss";
import Banner from "./components/banner/Banner";
// import Cards from "./components/Cards";
import { Nabvar } from "./components/nabvar/Nabvar";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container_nabvar">
          <Nabvar />
        </div>
        <div className="container">
          <Banner />
        </div>
      </div>
    </>
  );
}

export default App;
