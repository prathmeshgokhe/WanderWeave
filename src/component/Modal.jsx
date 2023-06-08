import React, { useState } from 'react'

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const MyModal = () => {
        return (
            <>
                <h1>
                    South Africa
                </h1>
                <button onClick={() => setShowModal(false)}>X</button>
                <p>
                    South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain
                </p>
            </>
        );
    }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Read More</button>
            {showModal && <MyModal closeModal />}
        </>
    )
}

export default Modal