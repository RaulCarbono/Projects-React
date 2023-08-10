import { useState } from 'react';
import { Header } from './components/Header';
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
    setModal(!modal);
    setTimeout(() => {
      setAnimationModal(true);
    }, 1000);
  };
  const saveExpense = ({ gasto }) => {
    gasto.id = generarId();
    setExpenses([...expenses, gasto]);
  };

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={NewExpensesIcon}
            alt="new Expenses Icon"
            onClick={handleNewExpenses}
          />
        </div>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animationModal={animationModal}
          setAnimarModal={setAnimationModal}
          saveExpenses={saveExpense}
        />
      )}
    </>
  );
}

export default App;
