import { agregarCarro, obtenerCarro } from "../services/carro-service";
import { getAll, save } from "../services/productos-service";
import { types } from "./types";


export const agregarProducto = (producto)=>({
    type: types.agregarProducto,
    payload: producto
});

export const cargarProductos = (productos)=>({
    type: types.cargarProductos,
    payload: productos
});

export const agregarProductoCarro = (producto)=>({
    type: types.agregarProductoACarro,
    payload: producto
});

export const cargarProductosACarro = (productos)=>({
    type: types.cargarCarro,
    payload: productos
});

export const startAgregarCarro = (producto)=>{
    return async(dispatch)=>{
        agregarCarro(producto);
        dispatch(agregarProductoCarro(producto));
    }
}

export const startCargarProductosCarro = ()=>{
    return async(dispatch)=>{
        let productos = obtenerCarro();
        dispatch(cargarProductosACarro(productos));
        return productos;
    }
}


export const startAgregarProducto = (producto)=>{
    return async(dispatch)=>{
        producto = await save(producto);
        if(producto != null){
            dispatch(agregarProducto(producto));
        }
        return producto;
    };
}




export const startCargarProductos = ()=>{
    return async(dispatch)=>{
        let productos = await getAll();
        if(productos != null){
            dispatch(cargarProductos(productos));
        }
        return productos;
    }
}


