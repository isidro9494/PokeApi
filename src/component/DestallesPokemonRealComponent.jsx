import React, { useEffect, useState } from 'react'
import {  getListPokemon, modificarPokemon } from '../services/serviceBack'

const DestallesPokemonRealComponent = (props) => {
     const [listadoPokemon , setListadoPokemon] = useState([])
    const [esEditado , setEsEditado] = useState (false)
    const [nuevoNombre , setNuevoNombre] = useState({
        id : props.pokemon.id,
        nombre: props.pokemon.nombre,
        url: props.pokemon.url,
        altura: props.pokemon.altura,
        peso: props.pokemon.peso,
        tipo: props.pokemon.tipo
    })
    const{
        pokemon,
        id,
        nombre,
        url,
        altura,
        peso,
        tipo,
        setOption,
        setPokemonSelected,
        setLista
        

    }=props
    useEffect(() => {
        setNuevoNombre({
                 id: pokemon.id,
                 nombre: pokemon.nombre,
                 url: pokemon.url,
                 altura: pokemon.altura,
                 peso: pokemon.peso,
                 tipo: pokemon.tipo, 
        
         })
         
     },[pokemon])
  const editarPokemonHandler = ()=>{
    const nuevaLista = modificarPokemon(pokemon, nuevoNombre);
   setLista(nuevaLista)
   setEsEditado(false)

  }
  const selectPokemon = () => {
    setPokemonSelected(pokemon)
}

const inputHandler = (nameProp, valueProp) => {
    setNuevoNombre((prevState) => ({
        ...prevState,
        [nameProp]: valueProp
    }));
}


    
  return (
    <div>
    {esEditado ? (
        <div>
            <h2>Editar Pokémon</h2>
            <div>
            <span>Id :</span>
            <input type="text" value={nuevoNombre.id} name='id' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>nombre :</span>
            <input type="text" value={nuevoNombre.nombre} name='nombre' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>url :</span>
           <input type="text" value={nuevoNombre.url} name='url' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div> 
            <div> 
                <span>Altura :</span>
            <input type="text" value={nuevoNombre.altura} name='altura' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
                 </div>
                 <div>
                    <span>Peso :</span>
            <input type="text" value={nuevoNombre.peso} name='peso' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
                 </div>
                 <div>
                    <span>Tipo :</span>
            <input type="text" value={nuevoNombre.tipo} name='tipo' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
                 </div>
                 <div>
            <button onClick={editarPokemonHandler}>Guardar</button>

            <button onClick={() => setEsEditado(false)}>Cancelar</button>
                 </div>
        </div>
    ) : (
        <div>
            <h2>Detalles del Pokémon</h2>
            <div>
                <span>id: </span>
                <span>{pokemon.id}</span>
            </div>
            <div>
                <span>nombre: </span>
                <span>{pokemon.nombre}</span>
            </div>
            <div>
                <span>url: </span>
                <span>{pokemon.url}</span>
            </div>
            <div>
                <span>altura: </span>
                <span>{pokemon.altura}</span>
            </div>
            <div>
                <span>peso: </span>
                <span>{pokemon.peso}</span>
            </div>
            <div>
                <span>tipo: </span>
                <span>{pokemon.tipo}</span>
            </div>
            <div>
                <button onClick={() => setEsEditado(true)}>Editar</button>
            </div>
            <div>
            <button onClick={() => setOption("LISTA")}>Volver</button>
            </div>
        </div>
    )}
</div>
);
}

export default DestallesPokemonRealComponent