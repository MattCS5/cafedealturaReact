import React from 'react'
import { Link } from 'react-router-dom'
import cafe from '../assets/cafe.png'
import Button from './Button'
import phone from '../assets/Phone.svg'
import mail from '../assets/Mail.svg'

const Footer = () => {
  return (
    <div className='flex flex-col bg-black gap-4 px-10 pt-7 pb-10'>
      

      <div className='flex text-white font-outfit '>
            <Link className='text-2xl flex gap-2 items-center outfit' to="/">
                <p>cafedealtura.com</p>
                <img className='w-5 h-6' src={cafe} alt='cafe'/>
            </Link>
      </div> 

      <div className='flex w-[1132px] justify-between'>

          <div className='font-outfit text-white flex flex-col gap-4  '>
            <h3>Te ayudamos en</h3>
            <Button  imagen={phone} backgroundColor="[#515051]" text="+34 919 49 05 18"/>
            <Button imagen={mail} backgroundColor="[#515051]" text="hola@cafedealtura.com" />
          
          </div>

          <div className='flex flex-col justify-center  gap-4 outfit text-white'>

            <Link to="/shop">Tienda</Link>
            <Link to="/suscripcion">Suscripción</Link>
            <Link to="/paraEmpresas">Para empresas</Link>
            <Link to="/sobreNosotros">Sobre Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
        
          </div>

          <div className='flex flex-col justify-center  gap-4 outfit text-white'>

          <Link to="/politicaPrivacidad">Política de privacidad</Link>
          <Link to="/politicaCookies">Política de cookies</Link>
          <Link to="/terminosCondiciones">Términos y condiciones</Link>
          
        
          </div>
      </div>

    </div>
  )
}

export default Footer