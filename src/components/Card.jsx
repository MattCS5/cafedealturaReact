import React from 'react'

const Card = ({logo, titulo, texto}) => {
  return (

  
    <div className='p-6  flex flex-col gap-4 bg-white  rounded-lg w-[316px] h-[232px] justify-center items-center  '>

          <div className='p-3 bg-[#2A5B45] rounded-3xl w-16 h-16 '>
              <img className='w-10 h-10' src={logo} alt='logo'/>
          </div>

          <p className='text-[#2B2A2B] text-lg font-semibold text-center'>{titulo}</p>
          <p className='text-[#111827] text-sm font-normal text-center'>{texto}</p>

    </div>
  
  )
}

export default Card