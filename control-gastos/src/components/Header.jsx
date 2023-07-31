import { NewBudget } from './NewBudget';

export const Header = ({ budget, setBudget }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      <h2>
        <NewBudget
          budget={budget}
          setBudget={setBudget}
        />
      </h2>
    </header>
  );
};
