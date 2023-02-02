import "./App.scss";
import datos from "./helpers/datos.json";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(datos.data);
  }, [datos]);
  console.log(user);
  return (
    <>
      <Header />
      <div className="table_container_users_views">
        <div className="tablelistuser_container">
          <div className="tablelistUser_content_header">
            <div className="__content_header_title">
              <h1> Lista de usuarios </h1>
              <span>Aquí puedes gestionar los usuarios</span>
            </div>
            <div className="__content_header_button">
              <button>Agregar Rol</button>
            </div>
          </div>
          <div className="table">
            <div className="table_title">
              <div className="table_t">
                <div className="tablet_th">Avatar</div>
                <div className="table_th">Id </div>
                <div className="table_th">Nombre Rol</div>
                <div className="table_th">Estado </div>
                <div className="table_th">deshabilitar rol</div>
                <div className="table_th">editar rol</div>
              </div>
            </div>
          </div>
          <div className="contentRoles">
              {user.getAllRoles.map((i, key) => (
                <div
                  className={`_tables_content_header ${
                    key % 2 !== 0 ? "" : "_tables_content_header_bg"
                  }`}
                >
                
                  <div className="__avatar__">::icon</div>
                  <div className="__div__">{i.id}</div>
                  <div className="__name_roles__">{i.name}</div>
                  <div className="__state_role__">Activo</div>
                  <div className="__div__">::icon</div>
                  <div className="__edit__">::icon</div>
                
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
