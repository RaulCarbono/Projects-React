import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import "../../index.css";
import { People } from "@/data/people";

export type HomeInterface = {};

const Home: React.FC<HomeInterface> = () => {
  const pageSize: number = 5;
  const colums = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.field}</>,
    },
  ];

  return (
    <div>
      <DataGrid
        rows={People}
        columns={colums}
        disableColumnSelector
        disableRowSelectionOnClick
        rowCount={3}
        rowThreshold={3}
        pageSizeOptions={[pageSize]}
      />
    </div>
  );
};

export default Home;
