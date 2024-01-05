import React from 'react'
import Wrapper from '../components/Wrapper'
import Condiciones from '../components/Condiciones'
import Novedades from '../components/Novedades'
import Faq from '../components/Faq'
import WraperDos from '../components/WraperDos'
import Footer from '../components/Footer'
import Split from '../components/Split'



const HomePage = () => {
  return (
    <div>
      <Wrapper/>
      <Condiciones/> 
      <Novedades/>
      <Faq/>
      <WraperDos/>
      <Split/>
      <Footer/>
    </div>
  )
}

export default HomePage