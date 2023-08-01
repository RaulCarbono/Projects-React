import { useState } from 'react';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import NewExpensesIcon from './img/nuevo-gasto.svg';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpenses = () => {
    setModal(!modal);
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
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default App;
