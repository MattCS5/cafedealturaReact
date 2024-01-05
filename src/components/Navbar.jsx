import React from 'react'
import { Link } from 'react-router-dom'
import Cafe from '../assets/cafe.png'
import Carrito from "../assets/Carr.svg"
import Telefono from "../assets/Phone.svg"

const Navbar = () => {
  return (
    <div className='h-16 bg-black text-white mb-4 flex items-center  justify-between py-3 px-10 font-outfit'>
      <div>
        <Link className='text-2xl flex gap-2 items-center outfit' to="/">
          <p>cafedealtura.com</p>
          <img className='w-5 h-6' src={Cafe} alt='cafe'/>
        </Link>
      </div>

      <div className='flex items-center gap-4 outfit'>

        <Link to="/shop">Tienda</Link>
        <Link to="/suscripcion">Suscripción</Link>
        <Link to="/paraEmpresas">Para empresas</Link>
        <Link to="/sobreNosotros">Sobre Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
        
      </div>

      <div >
        <Link className='flex items-center gap-4 outfit' to="/telefono">
          <div className='flex gap-2'>
            <img src={Telefono} alt='Telefono'/>
            <p>+34 919 49 05 18</p>
          </div>

        <Link className='flex gap-2 py-3 px-6 rounded bg-[#515051]' to="/iniciarSesion">Iniciar sesión</Link>

        </Link>
      </div>
  
      <Link to="/bagShop">
        <img src={Carrito} alt='carrito'/>
      </Link>
      
  </div>
  )
}

export default Navbar

