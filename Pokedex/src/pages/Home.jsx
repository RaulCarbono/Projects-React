import { Nabvar } from '../components/Nabvar';
import { Header } from '../components/Header';
import { CardPrincipal } from '../components/CardPrincipal';
import { getPokemons } from '../helpers/petitionAxios';

getPokemons()
export const Home = () => {

  return (
    <div className="principal-page">
      
      {/* <Nabvar /> */}
      <div className='container-header'>
      <Header />
      </div>  
      <CardPrincipal />
    </div>
  );
};
