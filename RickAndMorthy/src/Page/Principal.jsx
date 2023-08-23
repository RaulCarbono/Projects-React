import { Card } from '../components/Card';
import { Navbar } from '../components/Navbar';

export const Principal = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Card />
      </main>

      <footer>Adios..!</footer>
    </>
  );
};
