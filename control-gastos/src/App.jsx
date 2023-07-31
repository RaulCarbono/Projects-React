import { useState } from 'react';
import { Header } from './components/Header';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState('');
  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
      />
    </>
  );
}

export default App;
