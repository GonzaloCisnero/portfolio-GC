import React from 'react'
import './diplomas.css'
import UTN from '../../assets/utn.jpg'
import DOM from '../../assets/domestika.png'
import CERT1 from '../../assets/fullstack.jpg'
import CERT2 from '../../assets/webinicial.jpg'
import CERT3 from '../../assets/photoshop.png'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {logo: UTN,
  certificado :CERT1,
  titulo: 'Diplomatura en Programacion web Full Stack',
  },

  {logo: UTN,
    certificado :CERT2,
    titulo: 'Programador web inicial - Front end developer',
  },

  {logo: DOM,
    certificado :CERT3,
    titulo: 'Adobe Photoshop para diseño web',
  },

]



const Diplomas = () => {
    return(
        <section id='diplomas'>
            <h2>Diplomas</h2>

            <Swiper className='container diplomas__container'
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}>
              {
              data.map(({logo, certificado, titulo}, index) =>{
                return(
                <SwiperSlide  key={index} className='diploma'>
                <div className="logouni">
                 <img src={logo} alt="utn" />
                </div>
                <small className='cuadro'>
                 <img src={certificado} alt="certificado1" />
                </small>
               
              <h3>{titulo}</h3>

               </SwiperSlide>

                )
              })
             

             
            } 
            </Swiper>
        </section>
    )
}

export default Diplomas