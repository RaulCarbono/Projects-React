import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ModalComponent } from "./ModalComponent";

export const ButtonEditar = () => {
  const { openCreateRole, setOpenCreateRole } = useContext(AuthContext);
    const handleOpen = () => {
        setOpenCreateRole(true)
    }
  return (
    <>
    <Button onClick={() => setOpenCreateRole(true)}> editar </Button>
    </>
  )
  
};
