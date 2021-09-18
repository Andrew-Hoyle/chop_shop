import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'make', headerName: 'Make', width: 130 },
    { field: 'model', headerName: 'Model', width: 130},
    { field: 'msrp', headerName: 'MSRP', width: 130},
];

const rows = [
    {id: 1, make: 'Ford',  model: 'F-150', msrp: '50000' },
    {id: 2, make: 'Mercedes',  model: 'GLA', msrp: '40000' },
    {id: 3, make: 'Ford',  model: 'Ranger', msrp: '45000' },
    {id: 4, make: 'Chevy',  model: 'Silverado', msrp: '50000' },
    {id: 5, make: 'Ford',  model: 'F-150', msrp: '50000' },
    {id: 6, make: 'Ford',  model: 'F-150', msrp: '50000' },
    {id: 7, make: 'Ford',  model: 'F-150', msrp: '50000' },
    {id: 8, make: 'Ford',  model: 'F-150', msrp: '50000' },
]


export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%'}}>
            <h2>Cars in the Shop</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}