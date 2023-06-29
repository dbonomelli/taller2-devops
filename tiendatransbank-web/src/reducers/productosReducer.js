import { types } from "../actions/types";

const initialState = {
    productos:[],
    carro:[]
};

export const productosReducer = (state=initialState, action)=>{
    switch(action.type){
        case types.agregarProducto:
            //Modificar el state para que guarde el producto
            return {...state, productos: [...state.productos,action.payload]}
        case types.cargarProductos:
            //Modificar el state para que los productos sean los que me pasan
            return {...state, productos:[...action.payload]}
        case types.cargarCarro:
            if (action.payload !== null){
                return {...state,carro:[...action.payload]}
            }
            return {...state,carro:[]}
        case types.agregarProductoACarro:
            return {...state, carro: [...state.carro,action.payload]}
        default: return state;
    }
};