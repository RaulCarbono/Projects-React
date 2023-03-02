import { useContext } from "react";
import { Dialog, AppBar, TextField } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";

export const ModalComponent = ({data}) => {
  const { openCreateRole, setOpenCreateRole, type } = useContext(AuthContext);

  const handleClose = () => {
    setOpenCreateRole(!true);
  };

  return (
    <>
      <Dialog fullScreen open={openCreateRole} onClose={handleClose}>
        <AppBar color="success" sx={{height:"3em"}}>

         {type}
        </AppBar>
            <div className="container_form">
            <TextField  size="small" placeholder="agrega tu nombre" />
            <TextField  size="small" placeholder="agrega tu apellido" />
            </div>
              
           

      </Dialog>
    </>
  );
};
