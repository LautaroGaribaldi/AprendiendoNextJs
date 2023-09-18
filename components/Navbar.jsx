import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./NavBar.css"

const Navbar = () => {
    return (
        <nav>
            <div className='navBarConteiner'>
                <ul className='navBar'>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/about">about</Link></li>
                    <li><Link href="/regiones">Regiones</Link></li>
                </ul>
            </div>
            <div className='title'>
                <Image src="/pokemonLogo.png" width={700} height={300} />
            </div>
        </nav>
    )
}

export default Navbar