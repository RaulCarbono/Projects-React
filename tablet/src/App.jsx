import "./App.scss";
import datos from "./helpers/datos.json";
import Header from "./components/Header";
import EditIcon from "@mui/icons-material/Edit";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";

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
      <div className="table_container_roles_views">
        <div className="tablelisrol_container">
          <div className="tablelistrole_content_header">
            <div className="__content_header_title">
              <h1> Lista de Roles </h1>
              <span>Aquí puedes gestionar los roles de los usuarios</span>
            </div>
            <div className="__content_header_button">
              <button>Agregar Rol</button>
            </div>
          </div>
          {/* <div className="_rol_busqueda__">
            <input
              className="_rol_busqueda_input"
              type="text"
              placeholder="Busquedad"
            ></input>

            <SearchIcon className="_rol_busqueda_button" />
          </div> */}
          <div className="tablelistrole_content_header_table">
            <div className="table_title">
                <div>Nombre Rol</div>
                <div>Estado </div>
                <div>Acciones</div>
            </div>
          </div>
          <>
            {user.getAllRoles.map((i, key) => (
              <div
                className={`tablescontent_header_list ${
                  key % 2 !== 0 ? "" : "_tablescontent_header_list_bg"
                }`}
              >
                <div className="container_avatar_roles">
                  <Avatar>H</Avatar>{" "}
                  <div className="__name_roles__">{i.name}</div>
                </div>

                <div className="__state_role__"><strong>Activo</strong></div>
                <div className="__divi__">
                  <>
                    {" "}
                    <EditIcon className="_edit_"/> <NotInterestedIcon className="_desha_"/>{" "}
                  </>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
}

export default App;
