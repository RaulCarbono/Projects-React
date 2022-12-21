import { getMorty } from '../../services'
import {useDispatch} from 'react-redux'
import { createUser } from '../../redux/states/user';

const Login = () => {
  const dispatch = useDispatch();

  const login = async () => {
    try { 
    const result = await getMorty()
    dispatch(createUser(result))
  } catch (error) {}
  };
  return (
    <div>
      <h2> Hola este es el login </h2>
      <button onClick={login}>LOGIN</button>
    </div>
  )
}

export default Login