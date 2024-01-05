import React from 'react'
import plantaCafe from "../assets/plantaCafe.jpg"
import Button from './Button'

const Wrapper = () => {
  return (
    <div className='flex px-12 py-10 gap-6 justify-center items-center font-outfit'>

        <div className=' flex flex-col justify-center gap-4 '>

            <h3 className='text-[18px] text-[#2A5B45] font-semibold  '>De la planta a tu taza</h3>
            <h1 className='text-[40px] text-[#000] font-semibold  '>El mejor café del mundo, ahora en tu casa.</h1>
            <p className='text-[#111827] font-normal text-sm '>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>

            <div className='flex gap-4 text-white '>
              
              <Button backgroundColor="black" text="Descubrir Origenes"/>
              <Button backgroundColor="[#2A5B45]" text="Comprar café"/>
              
      
            </div>
            
        </div>

        <div>
           <img className=" w-[588px] h-[390px] rounded-2xl" src={plantaCafe} alt='plantacafe'/>
           
        </div>
        
    </div>
  )
}

export default Wrapper