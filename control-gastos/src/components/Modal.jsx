import { useState } from 'react';
import { Message } from './Message';
import CloseBtn from '../img/cerrar.svg';

export const Modal = ({ setModal, animationModal, setAnimationModal, saveExpenses }) => {
  const [name, setName] = useState('');
  const [current, setCurrent] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const hideModal = () => {
    setAnimationModal(false);
  };

  // setTimeout(() => {
  //   setModal(false);
  // }, 6000);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, category, current].includes('')) {
      setError('Todos los campos son obligatorios');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    saveExpenses({ name, current, category });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseBtn}
          alt="close modal"
          onClick={hideModal}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animationModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {error && <Message tipo={error}>{error}</Message>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            id="Nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="nombre">Cantidad</label>

          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto"
            value={current}
            onChange={(e) => setCurrent(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select
            id="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""> -- Seleccione --</option>
            <option value="ahorro"> Ahorro </option>
            <option value="comida"> Comidad </option>
            <option value="casa"> Casa </option>
            <option value="gastos"> Gastos Varios </option>
            <option value="ocio"> Ocio </option>
            <option value="salud"> Salud </option>
            <option value="subscripciones"> Subscripciones </option>
          </select>
        </div>
        <input
          type="submit"
          value="Añadir Gasto"
        />
      </form>
    </div>
  );
};
