let listadoPokemon =[
    {
        "id": 1,
        "nombre": "Bulbasaur",
        "altura": 0.7,
        "peso": 6.9,
        "tipo": ["Grass", "Poison"],
        "url": "https://www.pokemon.com/es/pokedex/bulbasaur"
    },
    {
        "id": 4,
        "nombre": "Charmander",
        "altura": 0.6,
        "peso": 8.5,
        "tipo": ["Fire"],
        "url": "https://www.pokemon.com/es/pokedex/charmander"
    },
    {
        "id": 7,
        "nombre": "Squirtle",
        "altura": 0.5,
        "peso": 9.0,
        "tipo": ["Water"],
        "url": "https://www.pokemon.com/es/pokedex/squirtle"
    },
    {
        "id": 25,
        "nombre": "Pikachu",
        "altura": 0.4,
        "peso": 6.0,
        "tipo": ["Electric"],
        "url": "https://www.pokemon.com/es/pokedex/pikachu"
    },
    {
        "id": 10,
        "nombre": "Caterpie",
        "altura": 0.3,
        "peso": 2.9,
        "tipo": ["Bug"],
        "url": "https://www.pokemon.com/es/pokedex/caterpie"
    },
    {
        "id": 12,
        "nombre": "Butterfree",
        "altura": 1.1,
        "peso": 32.0,
        "tipo": ["Bug", "Flying"],
        "url": "https://www.pokemon.com/es/pokedex/butterfree"
    },
    {
        "id": 15,
        "nombre": "Beedrill",
        "altura": 1.0,
        "peso": 29.5,
        "tipo": ["Bug", "Poison"],
        "url": "https://www.pokemon.com/es/pokedex/beedrill"
    },
    {
        "id": 16,
        "nombre": "Pidgey",
        "altura": 0.3,
        "peso": 1.8,
        "tipo": ["Normal", "Flying"],
        "url": "https://www.pokemon.com/es/pokedex/pidgey"
    },
    {
        "id": 19,
        "nombre": "Rattata",
        "altura": 0.3,
        "peso": 3.5,
        "tipo": ["Normal"],
        "url": "https://www.pokemon.com/es/pokedex/rattata"
    },
    {
        "id": 21,
        "nombre": "Spearow",
        "altura": 0.3,
        "peso": 2.0,
        "tipo": ["Normal", "Flying"],
        "url": "https://www.pokemon.com/es/pokedex/spearow"
    },
    {
        "id": 23,
        "nombre": "Ekans",
        "altura": 2.0,
        "peso": 6.9,
        "tipo": ["Poison"],
        "url": "https://www.pokemon.com/es/pokedex/ekans"
    },
    {
        "id": 26,
        "nombre": "Raichu",
        "altura": 0.8,
        "peso": 30.0,
        "tipo": ["Electric"],
        "url": "https://www.pokemon.com/es/pokedex/raichu"
    },
    {
        "id": 27,
        "nombre": "Sandshrew",
        "altura": 0.6,
        "peso": 12.0,
        "tipo": ["Ground"],
        "url": "https://www.pokemon.com/es/pokedex/sandshrew"
    },
    {
        "id": 29,
        "nombre": "Nidoran♀",
        "altura": 0.4,
        "peso": 7.0,
        "tipo": ["Poison"],
        "url": "https://www.pokemon.com/es/pokedex/nidoran-f"
    },
    {
        "id": 32,
        "nombre": "Nidoran♂",
        "altura": 0.5,
        "peso": 9.0,
        "tipo": ["Poison"],
        "url": "https://www.pokemon.com/es/pokedex/nidoran-m"
    },
    {
        "id": 35,
        "nombre": "Clefairy",
        "altura": 0.6,
        "peso": 7.5,
        "tipo": ["Fairy"],
        "url": "https://www.pokemon.com/es/pokedex/clefairy"
    },
    {
        "id": 37,
        "nombre": "Vulpix",
        "altura": 0.6,
        "peso": 9.9,
        "tipo": ["Fire"],
        "url": "https://www.pokemon.com/es/pokedex/vulpix"
    },
    {
        "id": 39,
        "nombre": "Jigglypuff",
        "altura": 0.5,
        "peso": 5.5,
        "tipo": ["Normal", "Fairy"],
        "url": "https://www.pokemon.com/es/pokedex/jigglypuff"
    },
    {
        "id": 41,
        "nombre": "Zubat",
        "altura": 0.8,
        "peso": 7.5,
        "tipo": ["Poison", "Flying"],
        "url": "https://www.pokemon.com/es/pokedex/zubat"
    },
    {
        "id": 43,
        "nombre": "Oddish",
        "altura": 0.5,
        "peso": 5.4,
        "tipo": ["Grass", "Poison"],
        "url": "https://www.pokemon.com/es/pokedex/oddish"
    }
]

export const getListPokemon = ()=>{
    return listadoPokemon
}

export const registrarPokemon = (pokemon) =>{
    const listaNueva = [...listadoPokemon]
    listaNueva.push(pokemon)
     listadoPokemon = listaNueva
}

export const eliminarPokemon = (id)=>{
    const listaNueva = listadoPokemon.filter((e)=>e.id !== id) 
    listadoPokemon = listaNueva
}

export const modificarPokemon= (pokemon, pokemonModificado) =>{
    const listaNueva = listadoPokemon.filter((e)=>e.id !== pokemon.id)
    listaNueva.push(pokemonModificado)
    listadoPokemon = listaNueva
}