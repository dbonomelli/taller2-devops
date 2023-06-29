import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
export const TablaCarro = ({productos, onPagar}) => {
    const handlePagar = ()=>{
        onPagar();
    }
    return (
        <>
            <div>
                <DataTable value={productos}>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="precio" header="Precio"></Column>
                 </DataTable>
            </div>
            <div className="mt-2">
                <h3>Total: ${productos.map(p=>p.precio).reduce((previo,nuevo)=>{
                        
                        return previo + nuevo;
                    },0)}</h3>
                <div className="d-grid gap-1">
                    <button className="btn btn-danger" type="button" onClick={handlePagar} >PAGAR</button>
                </div>
            </div>
        </>
    )
}
