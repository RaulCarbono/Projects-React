import CloseBtn from '../img/cerrar.svg';

export const Modal = ({ setModal }) => {
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
    </div>
  );
};
