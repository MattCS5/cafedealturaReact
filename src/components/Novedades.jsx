import React from 'react'
import ProductCard from './ProductCard'
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import flecha from "../assets/Flecha.svg";

const Novedades = () => {

  const [cafesData, setCafesData] = useState([]);

  useEffect(()=> {
  fetch("https://cafe-de-altura.vercel.app/api/products")
  .then(response=> response.json())
  .then(data => {
    const firstFourProducts = data.products.slice(0, 4);
    setCafesData(firstFourProducts);
    console.log(firstFourProducts);
  })

}, []);

  return (
  <div className='flex flex-col  p-10 gap-10 items-center'>

      <h2 className='flex text-[rgb(42,91,69)] text-2xl font-medium'> Novedades </h2>

      <div className=' flex flex-wrap gap-6 justify-center'>
            {cafesData.map((cafe)=>{
              return(
                <ProductCard key={cafe.id} cafeImg={cafe.img_url} name={cafe.brand} price={cafe.price}/>
              )
            })}
      </div>

      <Link className='flex gap-4 font-outfit font-semibold text-sm' to="/shop"><p><u>Ver todos</u></p><img src={flecha} alt="flecha"/> </Link>
  </div>
  )
}

export default Novedades