import Link from 'next/link'
import React from 'react'
import "./page.css"

const page = () => {
    return (
        <div>
            <h1>Regiones</h1>
            <div className='regionConteiner'>

                <Link href="/regiones/kanto">
                    <div>
                        <h3>Kanto</h3>
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5b/latest/20180712231931/Mapa_de_Kanto_LGPE.png/1200px-Mapa_de_Kanto_LGPE.png" alt="" width="400px" height="400px" />
                    </div>
                </Link>
                <Link href="/regiones/johto">
                    <div>
                        <h3>Johto</h3>
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fe/latest/20180203062443/Johto_HGSS.png/1200px-Johto_HGSS.png" alt="" width="400px" height="400px" />
                    </div>
                </Link>
                <Link href="/regiones/hoenn">
                    <div>
                        <h3>Hoenn</h3>
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/a/af/latest/20150228012617/Mapa_de_Hoenn_ROZA.png" alt="" width="400px" height="400px" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default page