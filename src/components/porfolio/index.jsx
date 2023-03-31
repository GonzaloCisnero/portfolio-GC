import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/today.png'
import IMG2 from '../../assets/virsel.png'
import IMG3 from '../../assets/gimnasioatenas.png'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Today Weather!',
        github: 'https://github.com/GonzaloCisnero/Today-s-weather-t',
        demo: 'https://gonzalocisnero.github.io/Today-s-weather-t/',
    },
    {
        id: 2,
        image:IMG2,
        title: 'Virsel Constructora',
        github: 'https://github.com/GonzaloCisnero/Today-s-weather-t',
        demo: 'https://gonzalocisnero.github.io/Today-s-weather-t/',
    },
    {
        id: 3,
        image:IMG3,
        title: 'Gimnasio Atenas',
        github: 'https://github.com/GonzaloCisnero/Today-s-weather-t',
        demo: 'https://gonzalocisnero.github.io/Today-s-weather-t/',
    }
   
]
const Porfolio = () => {
    return (
        <section id='portfolio'>
            <h2 >Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) =>{
                        return(
                            <article  key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                             <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                              <a href= {github} className='btn' target='_blank'>Github</a>
                              <a href= {demo} className='btn btn-primary' target='_blank'>Ver</a>
                            </div>
                        </article>
                        )
                    })
                }

            </div>
        </section>
    ) 
}

export default Porfolio