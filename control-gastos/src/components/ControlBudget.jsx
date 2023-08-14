import { useState } from "react";
import { useEffect } from "react";

export const ControlBudget = ({ budget, expenses }) => {
 

  const [disponible, setDisponible ] = useState(0)
  const [gastado, setGastado] = useState(0)

  console.log(expenses)
//  useEffect(() => {
//    const totalGastado = budget.reduce( (total, gasto) , => {

//    })
//  }, [budget])
 
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
          <span>Disponible :</span> {formaterCurrency(disponible)}
        </p>
        <p>
          <span>Gastado :</span> {formaterCurrency(gastado)}
        </p>
      </div>
    </div>
  );
};
