import { useState } from 'react';
import { Header } from './components/Header';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
    </>
  );
}

export default App;
