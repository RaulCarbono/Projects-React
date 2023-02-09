import { useEffect, useState } from "react";
import datos from "../helpers/datos.json";

const DataTable = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(datos.data.getAllRoles);
  }, [datos]);
  console.log(user);

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
            <h3>Opciones</h3>
          
          <div className="container_table_body">
        {user.map((i, key) => (
            <>
            {/* <div className="container_name_rol">{i.name}</div>
            <div className="container_estado">{i.id}</div>
            <div className="accions">
                <span><i class="fa-sharp fa-solid fa-user-pen"></i> </span>
                <span><i class="fa-solid fa-ban"></i></span>
            </div> */}
            </>
        ))}
        </div>
        </div>
        
        
      </div>
    </>
  );
};
export default DataTable;
