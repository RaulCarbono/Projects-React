import CloseBtn from '../img/cerrar.svg';

export const Modal = ({ setModal, animationModal }) => {
  const hideModal = () => {
    setModal(false);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseBtn}
          alt="close modal"
          onClick={hideModal}
        />
      </div>
      <form className={`formulario ${animationModal ? 'animar' : ''}`}>
        <legend>Nuevo gasto</legend>
      </form>
    </div>
  );
};
