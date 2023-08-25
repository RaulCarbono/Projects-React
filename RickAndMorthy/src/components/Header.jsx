import Rick from '../assets/Rick.svg';

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="img">
          <img
            src={Rick}
            alt="Logo"
            className="logo_rick"
          />
        </div>
        <nav className="navbar">
          <a className="button">Inicio</a>
          <a className="button">Docs</a>
          <a className="button">Favoritos</a>
          <a className="button">Filtrar</a>
          <input className="container_button" />
        </nav>
      </header>
    </>
  );
};
