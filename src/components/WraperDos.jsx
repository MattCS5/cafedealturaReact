import React from 'react'
import cafeteria from '../assets/Cafeteria.png'
import { Link } from 'react-router-dom'
import flecha from '../assets/Flecha.svg'

const WraperDos = () => {
  return (
    <div className='flex px-12 py-10 gap-6 justify-center items-center font-outfit'>

    <div className=' flex flex-col  gap-4 w-[457px] '>

        <h2 className='text-[24px] text-[#2A5B45] font-medium  '>Pruébalo en nuestro coffee shop</h2>
        <p className='text-[#111827] font-normal text-sm '>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
        <Link className='flex gap-4 font-outfit font-semibold text-sm' to="/sobreNosotros"><p><u>Cómo llegar</u></p><img src={flecha} alt="flecha"/></Link>
    </div>

    <div>
       <img className=" w-[588px] h-[390px] rounded-2xl" src={cafeteria} alt='cafeteria'/>
       
    </div>


    
</div>
  )
}

export default WraperDos