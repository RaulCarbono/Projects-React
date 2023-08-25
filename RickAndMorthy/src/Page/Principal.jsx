import { Card } from '../components/Card';
import { Navbar } from '../components/Header';

export const Principal = () => {
  return (
    <>
      <div className="app">
        <Navbar />

        <main>
          <Card />
        </main>

        <footer className="end_firma"> @By: Raul Carbono</footer>
      </div>
    </>
  );
};
