import Rick from '../assets/Rick.svg'

export const Navbar = () => {
  return (
    <>
      <header className="header">
      <div className="img">
      <img src={Rick} alt="Logo" className="logo_rick" />
      </div>
        <nav className="navbar">
          <a>Inicio</a>
          <a>Docs</a>
          <a>Favoritos</a>
          <a>Filtrar</a>
          <input className="container_button" />
        </nav>
      </header>
    </>
  );
};
