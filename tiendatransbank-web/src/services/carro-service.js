export const agregarCarro = (producto)=>{
    let productos = obtenerCarro();
    if(productos == null){
        productos = [];
    }
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
}

export const obtenerCarro = ()=>{
    return JSON.parse(localStorage.getItem("productos"));
}