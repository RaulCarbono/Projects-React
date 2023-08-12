import { useState } from 'react';
import { Header } from './components/Header';
import { ListExpenses } from './components/ListExpenses';
import { Modal } from './components/Modal';
import { generarId } from './helpers';
import NewExpensesIcon from './img/nuevo-gasto.svg';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewExpenses = () => {
    setModal(true);
    setTimeout(() => {
      setAnimationModal(true);
    }, 500);
  };
  const saveExpense = (gasto) => {
    gasto.id = generarId();
    gasto.date = Date.now();
    setExpenses([...expenses, gasto]);

    setAnimationModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal && 'fijar'}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListExpenses expenses={expenses} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={NewExpensesIcon}
              alt="new Expenses Icon"
              onClick={handleNewExpenses}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animationModal={animationModal}
          saveExpenses={saveExpense}
          setAnimationModal={setAnimationModal}
        />
      )}
    </div>
  );
}

export default App;
