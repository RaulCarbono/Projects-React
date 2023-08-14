import { useState } from 'react';
import { useEffect } from 'react';

export const ControlBudget = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0);
  const [worn, setWorn] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce((total, i) => i.current + total, 0);
    const totalAvailable = budget - worn;

    setAvailable(totalAvailable);
    setWorn(totalSpent);
  }, [expenses]);

  const formaterCurrency = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto :</span> {formaterCurrency(budget)}
        </p>
        <p>
          <span>Disponible :</span> {formaterCurrency(available)}
        </p>
        <p>
          <span>Gastado :</span> {formaterCurrency(worn)}
        </p>
      </div>
    </div>
  );
};
