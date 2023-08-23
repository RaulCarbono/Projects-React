export const Navbar = () => {
  return (
    <>
      <header className="container_navbar">
        <div className="container_logo">Rick and Morthy</div>
        <div className="container_list">
          <span>Inicio</span>
          <span>Docs</span>
          <span>Favoritos</span>
          <span>Filtrar</span>
          <input className="container_button" />
        </div>
      </header>
    </>
  );
};
