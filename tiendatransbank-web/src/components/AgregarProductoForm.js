import React, { useState } from 'react'
import { Editor } from 'primereact/editor';
import { Rating } from 'primereact/rating';
import { InputNumber } from 'primereact/inputnumber';
export const AgregarProductoForm = ({onAgregar}) => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [rating, setRating] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [categoria, setCategoria] = useState("");
    
    const handleAgregar = ()=>{
        let producto = {nombre,descripcion,rating,precio,categoria};
        onAgregar(producto);
    };

    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                <h3>Agregar Producto</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="nombre-txt" className="form-label" >Nombre</label>
                    <input type="text" id="nombre-txt" value={nombre} onInput={(e)=>setNombre(e.target.value)} className="form-control"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion-txt" className="form-label" >Descripcion</label>
                    <Editor style={{height:'320px'}} value={descripcion} onTextChange={(e) => setDescripcion(e.htmlValue)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="categoria-txt" className="form-label" >Categoria</label>
                    <input type="text" id="categoria-txt" value={categoria} onInput={(e)=>setCategoria(e.target.value)} className="form-control"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="rating-txt" className="form-label" >Rating</label>
                    <Rating cancel={false} value={rating} onChange={(e) => setRating(e.value)} />

                </div>
                <div className="mb-3">
                    <label htmlFor="precio-txt" className="form-label" >Precio</label>
                    <InputNumber value={precio} onValueChange={(e) => setPrecio(e.value)} />
                </div>
            </div>
            <div className="card-footer">
                <div className="d-grid gap-1">
                    <button onClick={handleAgregar} className="btn btn-danger">Agregar</button>
                </div>
            </div>
        </div>
    )
}
