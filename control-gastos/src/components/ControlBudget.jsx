export const ControlBudget = ({ budget }) => {
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
          <span>Disponible :</span> {formaterCurrency(0)}
        </p>
        <p>
          <span>Gastado :</span> {formaterCurrency(0)}
        </p>
      </div>
    </div>
  );
};
