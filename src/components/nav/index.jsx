import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {TfiUser} from 'react-icons/tfi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessage} from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#"   onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><TfiUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
           
            <a href="#contact"onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''} ><TbMessage/></a>
        </nav>
    )
}

export default Nav