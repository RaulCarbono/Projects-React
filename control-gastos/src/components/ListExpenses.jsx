import { Expense } from './Expense';

export const ListExpenses = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? 'Gastos' : 'No hay gastos'}</h2>

      {expenses.map((expense) => (
        <Expense
          key={expenses.id}
          expense={expense}
        />
      ))}
    </div>
  );
};
