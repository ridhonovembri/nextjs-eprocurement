'use client'
import React from 'react'
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";

const AppGridCustomToolbar = () => {
  return (    
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

export default AppGridCustomToolbar