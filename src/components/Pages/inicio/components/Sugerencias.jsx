import React from 'react'
import '../../../../../public/styles/sugerencias.css';

export const Sugerencias = () => {
  return (
    <div className='sugerencias-container'>
      <h2>tu opinión nos importa!</h2>
      <form >
          <textarea name="" id="" cols="30" rows="10" placeholder='escribe tu tu sugerencia'></textarea>
          <button>
            ENVIAR
          </button>
      </form>
    </div>
  )
}
