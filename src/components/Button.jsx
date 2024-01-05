import React from 'react'

const Button = ({backgroundColor, text, colorText, paddin,imagen}) => {

  const buttonClasses = `flex px-6 py-3 gap-2 rounded bg-${backgroundColor} text-${colorText} p-${paddin}`

  return (
    <button className={buttonClasses}>
      <img src={imagen} alt=''/>
      {text}

    </button>
  )
}

export default Button