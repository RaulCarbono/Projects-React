import "./App.scss";
import datos from "./helpers/datos.json";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
 
  useEffect(() => {
    setUser(datos.data);
  }, [datos]);
console.log(user)
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
              Agregar Rol
            </button>
          </div>
        </div>
        <table className="table">
          <thead className="table_title">
            <tr className="table_tr">
              <th className="table_th">Id </th>
              <th className="table_th">Nombre Rol</th>
              <th className="table_th">Estado</th>
              <th className="table_th">deshabilitar rol</th>
              <th className="table_th">editar rol</th>
            </tr>
          </thead>
          <tbody className="table_tbody">
          {user.getAllRoles.map((i) => (
                <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>Activo</td>
                <td>::icon</td>
                <td>::icon</td>
              </tr> 
                ))}
           
          </tbody>
        </table>
        </div>
      </div>
    
  );
}

export default App;
