import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/003.jpg'
import HeaderSocials from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hola soy </h5>
                <h1>Gonzalo Cisnero</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt="imagen" className='imagenone' />
                </div>

                <a href="#contact" className='scroll__down'> Scroll Down</a>
            </div>
        </header>
    )
}

export default Header