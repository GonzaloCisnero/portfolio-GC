import React from 'react'
import './experience.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h2>Habilidades</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Developer</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                        <div>
                         <h4>HTML</h4>
                         <small className='text-light'>Experiencia</small>
                        </div>
                        </article>

                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                        <div>
                         <h4>CSS</h4>
                         <small className='text-light'>Experiencia</small>
                        </div>
                        </article>

                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                        <div>
                         <h4>JavaScript</h4>
                         <small className='text-light'>Experiencia</small>
                        </div>
                        </article>

                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                       <div>
                         <h4>Bootstrap</h4>
                         <small className='text-light'>Experiencia</small>
                       </div>
                        </article>

                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                        <div>
                         <h4>Tailwaid</h4>
                         <small className='text-light'>Experiencia</small>
                        </div>
                        </article>

                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                        <div>
                         <h4>React</h4>
                         <small className='text-light'>Experiencia</small>
                        </div>
                        </article>


                    </div>

                </div>



                <div className="experience__backend">
                <h3>Backend Developer</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                       <div>
                         <h4>Node JS</h4>
                         <small className='text-light'>Experiencia</small>
                       </div>
                        </article>

                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                        <div>
                         <h4>MongoDB</h4>
                         <small className='text-light'>Experiencia</small>
                        </div>
                        </article>

                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                        <div>
                         <h4>MySQL</h4>
                         <small className='text-light'>Experiencia</small>
                        </div>
                        </article>

                        <article className='experience__details'>
                        <BsFillCheckSquareFill className='experience__details-icon'/>
                        <div>
                         <h4>PHYTON</h4>
                         <small className='text-light'>Experiencia</small>
                        </div>
                        </article>

                        
                      

                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default Experience