import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ModalComponent } from "./ModalComponent";

export const ButtonEditar = () => {
  const { openCreateRole, setOpenCreateRole, setType } = useContext(AuthContext);
    const handleOpen = () => {
        setOpenCreateRole(true)
        setType('editar')
    }
  return (
    <>
    <Button onClick={handleOpen}> editar </Button>
    </>
  )
  
};
