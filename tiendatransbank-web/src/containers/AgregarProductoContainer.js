import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { startAgregarProducto } from '../actions/productosActions';
import { AgregarProductoForm } from '../components/AgregarProductoForm'
import { Toast } from 'primereact/toast';
export const AgregarProductoContainer = () => {

    const dispatch = useDispatch();
    const toast = useRef(null);
    const agregarProd = async(producto)=>{
       let res = await dispatch(startAgregarProducto(producto));
       if(res != null){
           //Producto agregado exitosamente!
           toast.current.show({severity:'success', summary: 'Correcto', detail:'Producto agregado exitosamente', life: 3000});
       } else {
           //Mensaje de error
           toast.current.show({severity:'error', summary: 'Error!', detail:'Error al agregar', life: 3000});
      
       }
    };
    return (
        <div>
            <Toast ref={toast}></Toast>
            <div className="bg-purple bg-gradient text-center p-5 mt-3 text-white">
                <h3>Productos en Venta</h3>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-4 mx-auto">
                <AgregarProductoForm onAgregar={agregarProd}></AgregarProductoForm>
                </div>
            </div>

        </div>
    )
}
