import React, { useEffect,useState } from 'react'
import { getListPokemon } from './src/services/serviceBack'
import DetallePokemon  from './src/component/DetallePokemon'
import ListaComponentePokemon from './src/component/ListaComponentePokemon'
import CreacionPokemonComponent from './src/component/CreacionPokemonComponent'

const MenuPages = () => {
    const [listadoPokemon , setListadoPokemon] = useState([])
    const [opciones,setOpciones]= useState("")
    const [pokemonSelected, setPokemonSelected] = useState(undefined) 

    const loadData = ()=>{
        const aux = getListPokemon()
        setListadoPokemon(aux)
    }
    
    
    const menuOptionHandler = (option) => {
        setOpciones(option)
    }
    
    const selectPokemonHandler = (pokemon) => {
        setPokemonSelected(pokemon)
        setOpciones('LISTA')
    }
    
    useEffect(() => {
        loadData()
    }, [])



  return (
    <div>
        <h1>Listado de Pokemon </h1>
        <div> 
            <button onClick={() => menuOptionHandler('REGISTRO')}>Registrar Pokemon</button>
        </div>
        <div> 
            <button onClick={() => menuOptionHandler('CONTACTO')}>Contacto</button>
        </div>
        <div> 
            <button onClick={() => menuOptionHandler('LISTA')}>Listar Pokemon</button>
        </div>
        <hr />
        <div>
        {
        opciones === "REGISTRO" 
        ? (<CreacionPokemonComponent loadPokemon={loadData} />)
        : opciones === "CONTACTO" 
        ? (<DetallePokemon />)
        : opciones === "LISTA" 
        ? (<ListaComponentePokemon listadoPokemon={listadoPokemon} loadPokemon={loadData} setSelectOption={selectPokemonHandler} menuOptionHandler={menuOptionHandler}/>)
        : null
    }
        </div>
    </div>
  )
}

export default MenuPages