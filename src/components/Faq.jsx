import React from 'react'
import FaqWrap from './FaqWrap'
import { Link } from 'react-router-dom'
import flechaBlanca from '../assets/flechaBlanca.svg';

const Faq = () => {
  return (
    <div className='flex flex-col justify-center items-center  bg-[#2A5B45] font-outfit px-96 py-12 gap-6'>
        <h2 className='flex flex-col text-white text-2xl'>Preguntas frecuentes</h2>

          <FaqWrap 
          titulo="¿Cómo hago el pedido?" 
          descripcion="Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café."
          />
          
          <FaqWrap 
          titulo="¿Por qué los precios son tan bajos?"
          descripcion="Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible."
          />

          <FaqWrap 
          titulo="¿Es posible enviar café a mi oficina? "
          />

          <Link className='flex gap-4 font-outfit font-semibold text-sm text-white' to="/shop"><p><u>Resolvemos tus dudas</u></p><img src={flechaBlanca} alt="flecha"/></Link> 

    </div>
  )
}

export default Faq