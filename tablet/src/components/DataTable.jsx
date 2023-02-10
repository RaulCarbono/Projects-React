import { useEffect, useState } from "react";
import datos from "../helpers/datos.json";
import Avatar from '@mui/material/Avatar';

const DataTable = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(datos.data.getAllRoles);
  }, [datos]);
  console.log(user);

  const randomColor = () => {
    let style = ['avatar_color1', 'avatar_color2', 'avatar_color3', 'avatar_color4']
    let random = Math.floor(Math.random()*style.length)
    let value = style[random]
    return (value)
  }

  return (
    <>
      <div className="datatable_container">
        <div className="container_header">
          <h1>lista de roles </h1>
          <div className="content_header_button">
            <button className="button_agreger">
              <i className="fas fa-plus"></i>
              Agregar rol
            </button>
          </div>
        </div>
        <div className="container_title_table">
          <h3>Rol</h3>
          <h3>Estado</h3>
          <h3>Editar</h3>
          <h3>Deshabilitar</h3>

          <div>
            {user.map((i, key) => (
              <>
                <div className="container_table_body">
                  <div className="container_avatar_rol">
                  <Avatar className={randomColor()}>{i.name.charAt(0).toUpperCase()}</Avatar> 
                  <div className="name_rol">{i.name}</div>
                  </div>
                  <div className="container_estado">{"activo"}</div>
                  <div className="edit">
                    <span className="fa-stack">
                      <i class="fa fa-square fa-stack-2x"></i>{" "}
                      <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </div>
                  <div className="disable">
                    <span className="fa-stack">
                    <i class="fa fa-square fa-stack-2x"></i>
                      <i class="fa fa-ban fa-stack-1x fa-inverse"></i>
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default DataTable;
