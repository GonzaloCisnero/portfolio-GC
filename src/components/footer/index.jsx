import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Gonzalo Cisnero</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#diplomas">Diplomas</a></li>
                <li><a href="#experience">Habilidades</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/gonzalo.cisnero"><AiOutlineFacebook/></a>
                <a href="https://www.instagram.com/gonza.cisnero/"><BsInstagram/></a>
                <a href="https://www.linkedin.com/in/gonzalo-cisnero-995b96229/" target="_blank"><BsLinkedin/></a>
                
            </div>
        </footer>
    )
}

export default Footer