import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onReset } = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <>
      <h1>Formulario con Custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button
        className="btn btn-primary mt-2 "
        onClick={onReset}
      >
        Reset{' '}
      </button>
    </>
  );
};
