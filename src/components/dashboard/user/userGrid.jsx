"use client";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import AppGridCustomToolbar from "./gridCustomToolbar";

const UserGrid = ({ users }) => {
  // console.log('component ==>', users);

  const columns = [
    {
      field: "UserId",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "UserName",
      headerName: "User Name",
      width: 150,
      editable: true,
    },
    {
      field: "Job",
      headerName: "Job",
      width: 110,
      editable: true,
    },
  ];

  return (
    <>
      <DataGrid
        getRowId={(row) => row.Id}
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{
          toolbar: AppGridCustomToolbar,
        }}
      />
    </>
  );
};

export default UserGrid;
