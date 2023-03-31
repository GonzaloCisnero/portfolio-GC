import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yg8qcro', 'template_x77sfl6', form.current, 'g7Mgs51YjpbZ181MF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };

    return (
        <section id='contact'>
            <h2>Redes Sociales</h2>

             <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>cisnerogonzalo001@gmail.com</h5>
                    <a href="mailto:cisnerogonzalo001@gmail.com" target="_blank">Mandar mensaje</a>
                    </article>

                    <article className="contact__option">
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Gonzalo Cisnero</h5>
                    <a href="https://m.me/gonzalo.cisnero/" target="_blank">Mandar mensaje</a>
                    </article>

                    <article className="contact__option">
                    <ImWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+5491132365465</h5>
                    <a href="https://api.whatsapp.com/send?phone=5491132365465" target="_blank" >Mandar mensaje</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Nombre' required />
                <input type="email" name='email' placeholder=' Email' required />
                <textarea name="mensaje"  rows="7" placeholder=' mensaje' required></textarea>
                <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
             </div>
        </section>
    )
}

export default Contact