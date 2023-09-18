"use client"
import React from 'react'
import "./ButtonEvent.css"

const ButtonEvent = ({ pokemon }) => {
    return (
        <div className='buttonVerDatos'><button onClick={() => { alert(`el pokemon ${pokemon.name} pesa ${pokemon.weight} kilos`) }}>Ver Datos</button></div>
    )
}

export default ButtonEvent