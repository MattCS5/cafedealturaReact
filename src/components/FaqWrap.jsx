import React from 'react'
import chevron from '../assets/Chevron.svg';

const FaqWrap = ({titulo,descripcion}) => {
  return (
    <div className='flex flex-col  gap-4 p-6 bg-white rounded-lg font-outfit w-[668px]'>

        <div className='flex justify-between font-semibold'>
           <h3>{titulo}</h3> 
           <img src={chevron} alt='chevron'/>
        </div>
        <div className='bg-[#E3DED7] w-[620px] h-[1px]'>
          {/* Raya separaddora */}
        </div>
        
        <p className='text-xs font-normal'>{descripcion}</p>
    </div>
  )
}

export default FaqWrap