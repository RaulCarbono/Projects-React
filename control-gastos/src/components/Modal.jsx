import CloseBtn from '../img/cerrar.svg';

export const Modal = ({ setModal, animationModal, setAnimationModal }) => {
  const hideModal = () => {
    setAnimationModal(false);
  };

  setTimeout(() => {
    setModal(false);
  }, 6000);

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseBtn}
          alt="close modal"
          onClick={hideModal}
        />
      </div>
      <form className={`formulario ${animationModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            id="Nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="nombre">Cantidad</label>

          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select id="categoria">
            <option value=""> -- Seleccione --</option>
            <option value="ahorro"> Ahorro </option>
            <option value="comida"> Comidad </option>
            <option value="casa"> Casa </option>
            <option value="gastos"> Gastos Varios </option>
            <option value="ocio"> Ocio </option>
            <option value="salud"> Salud </option>
            <option value="subscripciones"> Subscripciones </option>
          </select>
        </div>
        <input
          type="submit"
          value="Añadir Gasto"
        />
      </form>
    </div>
  );
};
