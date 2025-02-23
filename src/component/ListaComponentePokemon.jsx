import React, { useState,useEffect } from 'react'
import DestallesPokemonRealComponent from './DestallesPokemonRealComponent'
import { eliminarPokemon,getListPokemon } from '../services/serviceBack'

const ListaComponentePokemon = (props) => {
  const [listadoPokemon, setListadoPokemon] = useState([]);
  const [menuOption, setOption] = useState("LISTA");
    const [selectPokemon, setSelectPokemon] = useState(null);
    const {
   
      pokemon,
      loadPokemon,
      setPokemonSelected,
      setLista
    } = props
    const handleDetails = (pokemon) => {
        setSelectPokemon(pokemon);
      };
 const eliminarPokemonHandler = (id)=>{
    eliminarPokemon(id)
    loadPokemon()
  }
  useEffect(() => {
    const aux = getListPokemon();
    setListadoPokemon(aux);
}, []);
  return (
    <div>
      {selectPokemon ? (
        <DestallesPokemonRealComponent pokemon={selectPokemon} loadPokemon={loadPokemon}   setOption={setOption} setLista={setListadoPokemon} />
      ) : (
        <div>
          <h2>Listado de Pokémon</h2>
          {listadoPokemon && listadoPokemon.length > 0 ? (
            listadoPokemon.map((pokemon, index) => (
              <div key={index}>
                <span>{pokemon.nombre}</span>
                <button onClick={() => handleDetails(pokemon)}>Ver Detalles</button>
                <button onClick={() => eliminarPokemonHandler(pokemon.id)}>Eliminar</button>
              </div>
            ))
          ) : (
            <div>No se ha encontrado el Pokémon</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListaComponentePokemon