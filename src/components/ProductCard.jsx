import React from 'react';


const ProductCard = ({cafeImg,name,price}) => {
  
  return (
    <div className=' flex flex-col gap-6 border-2 rounded p-6 justify-center items-center font-outfit'>

        <img src={cafeImg} alt='cafe'/>
        <div className='flex flex-col items-center gap-3'>
          <p className='text-black font-semibold text-sm'>{name}</p>
          <p className='font-normal'>{price},00€</p>
        </div>
        <button className='bg-[#2A5B45] opacity-70 text-white p-2 rounded'>Añadir</button>
    </div>
  )
}

export default ProductCard