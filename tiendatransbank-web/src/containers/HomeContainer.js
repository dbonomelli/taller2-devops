import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startAgregarCarro, startCargarProductos } from '../actions/productosActions';
import { Navbar } from '../components/Navbar'
import { TablaProductos } from '../components/TablaProductos'
import { Toast } from 'primereact/toast';

export const HomeContainer = () => {

    const {productos} = useSelector(state => state.productos);
    const dispatch = useDispatch();
    const toast = useRef(null);

    const agregarAlCarro = (producto)=>{
        dispatch(startAgregarCarro(producto));
        toast.current.show({severity:'success', summary: 'Correcto', detail:'Producto agregado al carro', life: 3000});
     
    }
    useEffect(() => {
        dispatch(startCargarProductos());
    }, [])
    return (
        <div>
             <Toast ref={toast}></Toast>
            <div className="bg-purple bg-gradient text-center p-5 mt-3 text-white">
                <h3>Productos en Venta</h3>
            </div>
            <section className="container mt-5">
                <TablaProductos onAgregarCarro={agregarAlCarro} productos={productos}></TablaProductos>
            </section>
            
        </div>
    )
}
