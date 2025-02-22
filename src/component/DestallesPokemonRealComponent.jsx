import React, { useState } from 'react'
import { eliminarPokemon, getListPokemon, modificarPokemon } from '../services/serviceBack'

const DestallesPokemonRealComponent = (props) => {
    const [esEditado , setEsEditado] = useState (false)
    const [nuevoNombre , setNuevoNombre] = useState(props.pokemon.nombre)
    const{
        pokemon,
        id,
        nombre,
        url,
        loadPokemon,
        setOption,
        setPokemonSelected

    }=props

   
  const editarPokemonHandler = ()=>{
   const pokemonModify = {...pokemon,nombre: nuevoNombre}
   modificarPokemon(pokemon, pokemonModify)
   setEsEditado(false)
   loadPokemon()
  }
  const selectPokemon = () => {
    setPokemonSelected(pokemon)
}
  return (
    <div>
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
        <button onClick={() => {editarPokemonHandler(id)}}>Editar</button>
        </div>
        {
            setOption ? (
                <div>
                    <button onClick={() => setOption('LISTADO')}>Volver</button>
                </div>
            ) : (
                <div>
                    <button onClick={selectPokemon}>Detalles</button>
                </div>
            )
        }
    </div>
  )
}

export default DestallesPokemonRealComponent