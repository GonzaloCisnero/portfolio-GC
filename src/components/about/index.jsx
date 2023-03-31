import React from 'react'
import './about.css'
import ME from '../../assets/002.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About= () => {
    return (
        <section id='about'>
            <h2>Sobre mi</h2>
            <div className='container about__container'>
              <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="imagen perfil" />
                </div>
              </div>

              <div className="about__content">
               <div className="about__cards">
                <article className="about__card">
                    <FaAward className='about__icon'/>
                    <h5>Experiencia</h5>
                    <small>Recibido en 2022</small>
                </article>

                <article className="about__card">
                    <FaUsers className='about__icon'/>
                    <h5>Clientes</h5>
                    <small>1+En proceso</small>
                </article>

                <article className="about__card">
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Proyectos</h5>
                    <small>3 + En proceso</small>
                </article>
               </div>

               <p>Puedo adaptarme rápidamente al
                 entorno de trabajo y los metodos que
                 se esta utilizando, mi enfoque
                 principal es trabajar en equipo ,
                 aprender y ayudar a mis compañeros
                 dé trabajo con el fin de obtener un
                 buen desempeño y cumplir con las
                 metas requeridas
               </p>

               <a href="#contact" className='btn btn-primary'>Contacto</a>
              </div>
            </div>
        </section>
    )
}

export default About