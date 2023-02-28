import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { ModalComponent } from "./ModalComponent";
import { ButtonEditar } from "./ButtonEditar";
import { AuthContext } from "../context/AuthProvider";

export const ButtonCrear = () => {
  const { openCreateRole, setOpenCreateRole,setType } = useContext(AuthContext);
 

  const handleOpen = () => {
    setOpenCreateRole(true)
    setType('crear')
  }

  const handleClose = () => {
    setOpenCreateRole(!true)
  }
  
  let data = {
    name: "Raul",
    apellido: "Carbono",
    edad: 24,
    correo: "carbonoraul2@gmail.com",
  };

  return (
    <div>
      <Button
        color="success"
        variant="contained"
        sx={{ textTransform: "capitalize" }}
        onClick={handleOpen}
      > Crear Role</Button>
      <ButtonEditar  />

      <ModalComponent  />
    </div>
  );
};
