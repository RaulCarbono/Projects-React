import { NewBudget } from './NewBudget';
import { ControlBudget } from './ControlBudget';

export const Header = ({ expenses, budget, setBudget, setIsValidPresupuesto, isValidPresupuesto }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlBudget
          budget={budget}
          expenses={expenses}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};
