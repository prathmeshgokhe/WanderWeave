import React from 'react'
import "./navebar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='logo'>
                WanderWeave
            </div>

            <div className='nav'>
                <ul>
                    <li><Link to='./'>HOME</Link></li>
                    <li><Link to='./About'>ABOUT US</Link></li>
                    <li><Link to='./About'>CONTACT US</Link></li>
                    <li><Link to='./About'>FAQ</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar