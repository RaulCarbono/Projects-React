import pokeLogo from '../resourse/pokeLogo.png'
import pokeball from '../resourse/pokeball.png'

export const Header = () => {
  return (
    <div>
        <div className='container_title'>
           
            <img src={pokeLogo} alt="logo pokemon" />
            <img className='container-pokeball' src={pokeball} alt="Pokeball" />
        </div>
    </div>
  )
}
