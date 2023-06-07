import React from 'react'
import "./navebar.scss"
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='logo'>
                WanderWeave
            </div>
            <div className='nav'>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar