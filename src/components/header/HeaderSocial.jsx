import React from "react"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials= () => {
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/gonzalo-cisnero-995b96229/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/GonzaloCisnero" target="_blank"><BsGithub/></a>
        </div>
    )
}

export default HeaderSocials