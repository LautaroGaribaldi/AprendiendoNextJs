import PokeCard from '@/components/PokeCard'
import React from 'react'
import "./page.css"

const loadRegion = async (region) => {
    let res
    let data
    switch (region) {
        case "kanto":
            res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            data = await res.json()
            return data.results
            break;
        case "johto":
            res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151")
            data = await res.json()
            return data.results
        case "hoenn":
            res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=135&offset=251")
            data = await res.json()
            return data.results

        default:
            return null
            break;
    }
}

const page = async ({ params }) => {
    const pokemons = await loadRegion(params.region)
    //console.log(pokemons)
    if (pokemons === null) {
        // No se genera el mapeo si pokemons es null
        return <p>Región no encontrada.</p>
    }
    return (
        <div className='pokeCardConteiner'>
            {pokemons.map((pokemon) => (
                <div key={pokemon.name} className='pokeCard'>
                    <h1>{pokemon.name}</h1>
                    <PokeCard pokemonUrl={pokemon.url} />
                </div>
            ))}
        </div>
    )
}

export default page