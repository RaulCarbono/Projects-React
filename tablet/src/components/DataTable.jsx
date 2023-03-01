import { useEffect, useState } from "react";
import datos from "../helpers/datos.json";
import Avatar from '@mui/material/Avatar';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';

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
          <h3 className="name_rol_title">Rol</h3>
          <h3 className="state_rol">Estado</h3>
          <h3></h3>
          <h3></h3>

          <div>
              {user.map((i, key) => (
                <>
                  <div className="container_table_body">
                    <div className="container_avatar_rol">
                    <Avatar className={randomColor()}>{i.name.charAt(0).toUpperCase()}</Avatar> 
                    <div className="name_rol">{i.name}</div>
                    </div>
                    <div className="container_estado"><p>activo</p></div>
                    <div className="edit_container">
                      
                      <ModeEditIcon className="edit_icon" />
                      
                    </div>
                    <div className="disable_container">
                      <AutoDeleteIcon className="disable_icon" />
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
