import React from 'react'
import ButtonEvent from './ButtonEvent'
import "./PokeCard.css"

const loadPokemon = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

const PokeCard = async ({ pokemonUrl }) => {
  const pokemon = await loadPokemon(pokemonUrl)
  return (
    <div>
      <img src={pokemon.sprites.other.dream_world.front_default} alt="" className='PokePicture' />
      <ButtonEvent pokemon={pokemon} />
    </div>
  )
}

export default PokeCard