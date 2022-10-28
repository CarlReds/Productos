import React from 'react';
import '../hojas-de-estilo/Producto.css';

function Producto(props){
  return (
    <div className='contenedor-producto'>
      <img 
        className='imagen-producto'
        src={require(`../imagenes/Apple-${props.imagen}.jpg`)}
        alt='Foto de Apple iphone 14' />
      <div className='contenedor-texto-producto'>
        <p className='nombre-producto'>{props.nombre}</p>
        <p className='marca-producto'>{props.marca}</p>
        <p className='descripción-producto'>{props.descripcion}</p>
        <p className='precio-producto'>{props.precio}</p>
      </div>  
    </div>
  );
}

export default Producto;