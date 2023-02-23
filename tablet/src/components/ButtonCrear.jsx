import { Button } from "@mui/material";
import { useState } from "react";
import { ModalComponent } from "./ModalComponent";

export const ButtonCrear = () => {

  const [openCreateRole, setOpenCreateRole] = useState(false)

  const handleCreateRole = () => {
    setOpenCreateRole(true)
  }

  const handleCloseRole = () => {
    setOpenCreateRole(!true)
  }

  return (
    <div>
      <Button color="success" variant="contained" sx={{textTransform:"capitalize"}} onClick={handleCreateRole}> Crear rol</Button> {" "}
      <Button onClick={handleCloseRole}>close</Button>
      {openCreateRole? <ModalComponent openCreateRole={openCreateRole}/> : "" }
    

    </div>
  );
};
