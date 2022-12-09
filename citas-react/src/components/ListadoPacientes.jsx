
import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes,setPaciente, eliminarPaciente }) => {


  return (
    <div className="w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado pacientes{" "}
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">
              {" "}
              Pacientes y Citas{" "}
            </span>
          </p>

          {pacientes.map((item) => (
            <Pacientes 
            paciente={item} 
            key={item.id}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente} 
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando Pacientes {""}
            <span className="text-indigo-600 font-bold">
              {" "}
              y aparereceran en este lugar{" "}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
