import React from 'react'
import phone from '../assets/Phone.png'
import mail from "../assets/Mail.png"

const Split = () => {
  return (
    <div className='flex bg-[#E3DED7] px-10 font-outfit gap-6 '>

      <div className='flex flex-col justify-center'>


        <div className='flex flex-col gap-3'>

          <div className='flex flex-col'>
            <h3 className='font-semibold text-lg'>Entra en contacto con nosotros</h3>
          </div>

          <p className='font-normal text-sm'>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>

        </div>

        <div className='flex flex-col gap-6 font-normal text-sm'>
          
            <p>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>

            <div flex flex-col>
                <p>742 Evergreen Terrace</p>
                <p>Springfield, OR 12345</p>
            </div>

            <div className='flex flex-col gap-3'>

              <button className='flex  items-center gap-3 text-[#6B7280]'><img src={phone} alt='phone'/>+1 (555) 123-4567</button>
              <button className='flex  items-center gap-3 text-[#6B7280]'><img className='' src={mail} alt='mail'/>support@example.com</button>
              
            </div>
            

            <div className='flex'>
              <p>¿Buscas un trabajo?</p>
              <p><b><u>Ver nuestras ofertas.</u></b></p>
            </div>



            <div className='flex flex-col'>

            </div>
        </div>
      </div>

      <div className='flex flex-col justify-center bg-white pl-12 py-8 pr-8 text-xs font-normal'>
        <form className='flex flex-col gap-6'>
          <div className='flex flex-col gap-1'>
            <label for="nombre">Nombre Completo:</label>
            <input className='h-[34px] rounded-md shadow border-[1px] hover:border-[#9B9EA3] ' type="text" id="nombre" name="nombre"></input>
          </div>
          <div className='flex flex-col gap-1 '>
            <label for="email">Email:</label>
            <input className='h-[34px] rounded-md shadow border-[1px] hover:border-[#9B9EA3]' type="email" id="email" name="email"></input>
          </div>
          <div className='flex flex-col gap-1'>
              <label for="prefijo">Teléfono</label>

              <div className='flex items-center h-[34px] rounded-md shadow border-[1px] gap-1 hover:border-[#9B9EA3]'>
                  <select className='border-none outline-0 shadow-none bg-transparent py-3 px-2 justify-center gap-1' id="prefijo" name="prefijo">
                    <option value="US">US </option>    
                    <option value="+ES"> ES </option>
                    <option value="FR">FR</option>                   
                  </select>
                  <input className='border-none outline-0 shadow-none bg-transparent px-2  ' type="tel" id="telefono" name="telefono" placeholder="+1 (555) 987-6543"></input>
              </div>

          </div>
          <div >

            <label  for="textarea"></label>
            <textarea className='w-[470px] rounded-md shadow border-[1px] py-3 px-4 hover:border-[#9B9EA3]' placeholder="¿En qué podemos ayudarte?"></textarea>

          </div>

          <div className='flex items-center gap-3'>
            <input type="checkbox" id="acepto" name="acepto"></input>
            <label class="terminosYcondiciones" for="acepto"> Acepto la <b><u>Política de Privacidad</u></b> y los <b><u>Términos y Condiciones</u></b></label>

          </div>

          <div>
            <input  className='bg-[#2A5B45] text-white py-3 px-6 rounded'  type="submit" value="Enviar"></input> 
          </div>

        </form>
      </div>


      {/* 
          <div>
                <form>
                <div>
                    <label for="nombre">Nombre Completo:</label>
                    <input class="inputBorder" type="text" id="nombre" name="nombre">
                </div>
                    
                <div>
                    <label for="email">Email:</label>
                    <input class="inputBorder" type="email" id="email" name="email">
                </div>
                    
                    <div>

                        <label for="prefijo">Teléfono</label>
                        <div class="telefono">

                                <select  id="prefijo" name="prefijo">
                                    <option value="US">US </option>    
                                    <option value="+ES"> ES </option>
                                    <option value="FR">FR</option>
                                   
                                </select>

                                <input class="inputTel" type="tel" id="telefono" name="telefono" placeholder="+1 (555) 987-6543">
                        </div>
                    </div>

                    <div>

                        <label for="textarea"><span class="transparente">NODNVJNVD</span></label>
                        <textarea placeholder="¿En qué podemos ayudarte?" style="height: 122px;"></textarea>

                    </div>
                    
                  
                        <div>

                            <input class="inputBorder" type="checkbox" id="acepto" name="acepto">

                            <label class="terminosYcondiciones" for="acepto"> Acepto la <span class="tamañoNegritaYsub">Política de Privacidad</span> y los <span class="negritaYsub">Términos y Condiciones</span>
                            </label>
                        </div>
                
                        <div class="submit">
                            <input class="Enviar" type="submit" value="Enviar">
                        </div>
                        
                </form>
            </div>
       */}
    </div>
  )
}

export default Split