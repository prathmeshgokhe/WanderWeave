import React from 'react'
import "./home.scss"
import Navbar from "./Navbar"

const Home = () => {
    return (
        <div className='Container'>
            <div className='main'>
                <Navbar />
                <div className='content-left'>
                    <div className='info'>
                        <h1>
                            South Africa
                        </h1>
                        <p>
                            South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain
                        </p>
                    </div>
                    <button className='button'>Read More</button>
                </div>
                <div className='content-right'></div>
            </div>
        </div>
    )
}

export default Home
