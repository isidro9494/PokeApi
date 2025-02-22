import React, { useState } from 'react'
import DestallesPokemonRealComponent from './DestallesPokemonRealComponent'
import { eliminarPokemon } from '../services/serviceBack'

const ListaComponentePokemon = (props) => {
    const [selectPokemon, setSelectPokemon] = useState(null);
    const {
   
      listadoPokemon,
      pokemon,
      loadPokemon,
      setPokemonSelected
    } = props
    const handleDetails = (pokemon) => {
        setSelectPokemon(pokemon);
      };
 const eliminarPokemonHandler = (id)=>{
    eliminarPokemon(id)
    loadPokemon()
  }

  return (
    <div>
      {selectPokemon ? (
        <DestallesPokemonRealComponent pokemon={selectPokemon} />
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