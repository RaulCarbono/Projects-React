import { useState } from 'react';
import { Message } from './Message';

export const NewBudget = ({ budget, setBudget }) => {
  const [message, setMessage] = useState('');
  const handleBudgetChange = (e) => {
    e.preventDefault();

    if (!budget || budget) {
      setMessage('No es un presupuesto valido');
      return;
    }
    setMessage('');
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form
        onSubmit={handleBudgetChange}
        className="formulario"
      >
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input
          type="submit"
          value="Añadir"
        />

        {message && <Message tipo="error">{message}</Message>}
      </form>
    </div>
  );
};
