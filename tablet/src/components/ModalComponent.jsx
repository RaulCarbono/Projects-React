import { useContext } from "react";
import { Dialog, AppBar } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";

export const ModalComponent = ({data}) => {
  const { openCreateRole, setOpenCreateRole } = useContext(AuthContext);

  const handleClose = () => {
    setOpenCreateRole(!true);
  };

  return (
    <>
      <Dialog fullScreen open={openCreateRole} onClose={handleClose}>
        <AppBar color="success" sx={{height:"3em"}}>

         editar rol
        </AppBar>
      </Dialog>
    </>
  );
};
