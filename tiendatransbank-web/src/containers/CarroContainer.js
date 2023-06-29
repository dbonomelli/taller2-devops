import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { startCargarProductosCarro } from '../actions/productosActions';
import { Dialog } from 'primereact/dialog';
import { TablaCarro } from '../components/TablaCarro';
import { pagarEnTransbank } from '../services/productos-service';

export const CarroContainer = () => {

    const dispatch = useDispatch();
    const { carro } = useSelector(state => state.productos);
    const [carroVisible, setCarroVisible] = useState(false);
    const handlePagar = () => {
        setCarroVisible(true);
    };

    const irATransbank = async()=>{
        const venta = {total: carro.map(p=>p.precio).reduce((previo,nuevo)=>{
                        
            return previo + nuevo;
        },0)};
        let respuestaTransbank = await pagarEnTransbank(venta);
        
        let form = document.createElement("form");
        let inputHidden = document.createElement("input");
        inputHidden.type= "hidden";
        inputHidden.name = "token_ws";
        inputHidden.value = respuestaTransbank.token;
        form.action = respuestaTransbank.url;
        form.method = "POST";
        form.appendChild(inputHidden);
        document.body.appendChild(form);
        
        form.submit();

    };

    useEffect(() => {
        dispatch(startCargarProductosCarro());
    }, [])

    return (<>

        <Dialog header="Productos a Pagar"
            visible={carroVisible}
            style={{ width: '50vw' }}
            onHide={() => setCarroVisible(false)}>
            <div>
                <TablaCarro onPagar={irATransbank} productos={carro}></TablaCarro>
            </div>
        </Dialog>

        <button class="btn btn-outline-warning text-white" type="button" onClick={handlePagar} >
            <i className="pi pi-shopping-cart"></i>
            <span>Carrito de Compra {carro && carro.length}</span></button>
    </>
    )
}
