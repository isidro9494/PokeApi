import React, { useState, useEffect } from 'react'
import { registrarPokemon } from '../services/serviceBack'

const CreacionPokemonComponent = (props) => {
  
    const {
       id,
       nombre,
       url,
       altura,
       peso,
       type,
       loadPokemon,
       pokemon,
       setOptiones,
       setPokemonSelected
    } = props
    const [newPokemon, setNewPokemon] = useState({
        id:"",
        nombre:"",
        url:"",
        altura:"",
        peso:"",
        type:""
    })

    const inputHandler = (nameProp, valueProp) => {
        const pokemonAux = {
            ...newPokemon,
            [nameProp]: valueProp
        }
        setNewPokemon(pokemonAux)
    }

    const registerHandler = () => {
        registrarPokemon(newPokemon)
        setNewPokemon({
            id: "",
            nombre: "",
            url: "" ,
            altura:"",
            peso:"",
            type:""
        })
        loadPokemon()
        setOptiones("LISTA")
    }

    const modifyHandler = () => {
        editarPokemon(pokemon, newPokemon)
        setPokemonSelected(newPokemon)
        setNewPokemon({
            id: "",
            nombre: "",
            url: "",
            altura:"",
            peso:"",
            type:""
        })
        loadPokemon()
        setOptiones("DETALLES")
    }

    const cancelHandler = () =>{
        setNewPokemon({
            id: '',
            nombre: '',
            url: '' ,
            altura:"",
            peso:"",
            type:""
        })
        setOptiones('DETALLES')
    }

   
    useEffect(() => {
        if(!pokemon){
            setNewPokemon({
                id: "",
                nombre: "",
                url: "",
                altura:"",
                peso:"",
                type:"", 
            })
        }
    },[pokemon])

    useEffect(() => {
        console.log('mount');
        
    },[])

  return (
    <div>
        {
            pokemon ? (
                <h2>Editar pokemon</h2>
            ) : (
                <h2>Registro de pokemon</h2>
            )
        }
        
        <div>
            <div>
                <span>id</span>
                <input type="text" value={newPokemon.id} name='id' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>Nombre </span>
                <input type="text" value={newPokemon.nombre} name='nombre' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>URL</span>
                <input type="url" value={newPokemon.url} name='url' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>altura :</span>
                <input type="text" value={newPokemon.altura} name='altura' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>Peso </span>
                <input type="text" value={newPokemon.peso} name='peso' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>Type</span>
                <input type="text" value={newPokemon.type} name='type' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
            {
                pokemon
                ? (
                    <div>
                        <button onClick={modifyHandler}>Editar Pokemon</button>
                        <button onClick={cancelHandler}>Volver</button>
                    </div>
                ) : (
                    <button onClick={registerHandler}>Registrar Pokemon</button>
                )
            }
            </div>
        </div>
    </div>
  )
}
export default CreacionPokemonComponent