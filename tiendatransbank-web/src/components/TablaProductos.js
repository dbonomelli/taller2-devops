import React from 'react'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import {Rating} from 'primereact/rating';
import {Button} from 'primereact/button';
import './TablaProductos.scss';
export const TablaProductos = ({productos, onAgregarCarro}) => {
    const itemTemplate = (data, layout) => {
            return (
                renderGridItem(data)
            );  
    }

    const handleAgregarCarro = (data)=>{
        onAgregarCarro(data);
    }

    const renderGridItem = (data) => {
        return (
            <div className="col-12 col-md-4 mb-3 pe-3">
                <div className="card">
                <div className="card-header bg-purple text-white text-center">
                  
                  <i className="pi pi-tag product-category-icon"></i>
                 <span className="product-category">{data.categoria}</span>
         </div>
             <div className="card-body text-center">
             <img className="img-producto" src={`https://yt3.ggpht.com/ytc/AKedOLTOnXxkvSDNwABXGO1R8RlJALLSiHCmSSMI4Bd5WA=s900-c-k-c0x00ffffff-no-rj`}
             onError={(e) => e.target.src='https://yt3.ggpht.com/ytc/AKedOLTOnXxkvSDNwABXGO1R8RlJALLSiHCmSSMI4Bd5WA=s900-c-k-c0x00ffffff-no-rj'} alt={data.nombre} />
                 <div className="product-name">{data.nombre}</div>
                 <div className="product-description">{data.descripcion}</div>
                 <Rating value={data.rating} readOnly cancel={false}></Rating>
             </div>
             <div className="card-footer text-center">
                 <span className="product-price">${data.precio}</span>
                 <div className="d-grid gap-1">
                     <button onClick={()=>handleAgregarCarro(data)} className="btn btn-primary"> 
                     <i className="pi pi-shopping-cart"></i>
                     Agregar al Carro</button>
                 </div>
                 
             </div>
                </div>
            </div>
        );
    }


    return (
        <div className="tabla-productos container-fluid">
        <DataView value={productos} className="row gx-5"  layout="grid" 
                    itemTemplate={itemTemplate} paginator rows={6}
                     />
        </div>
    )
}
