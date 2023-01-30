import "./App.scss";

function App() {
  return (
    <div className="table_container_users_views">
      <div className="tablelistuser_container">
        <div className="tablelistUser_content_header">
          <div className="__content_header_title">
            <h1> Lista de usuarios </h1>
            <span>Aquí puedes gestionar los usuarios</span>
          </div>
          <div className="__content_header_button">
            <button>
              {/* <i className="fas fa-plus">::before</i> */}
              Agregar usuario
            </button>
          </div>
        </div>
        <div className="tablelistusuario_content_header_tablet">
          <div className="__content_header_tablet"> ID </div>
          <div className="__content_header_tablet"> Nombre </div>
          <div className="__content_header_tablet"> Apellido </div>
          <div className="__content_header_tablet"> Usuario </div>
          <div className="__content_header_tablet"> Contacto </div>
          <div className="__content_header_tablet"> n° Identificación </div>
          <div className="__content_header_tablet"> Correo </div>
          <div className="__content_header_tablet">
            {" "}
            Habilitar/Deshabilitar{" "}
          </div>
          <div className="__content_header_tablet"> Historial </div>
        </div>
        <div className="tablelistusuario_content_header_user tablelistusuario_content_header_bg">
          <div className="__div__">1</div>
          <div className="__content_codes_name_users">Raul</div>
          </div>
      </div>
    </div>
  );
}

export default App;
