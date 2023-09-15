import React from 'react'
import '../../../../../public/styles/sorteos.css';

export const Sorteos = () => {
  return (
    <div className='sorteos-container row justify-content-center aling-items-center p-5'>

        <div className='col-4'>
            <div className='ganador'>
                <img src="../../../../../../../public/avatar/ganador-avatar.jpeg" alt=""/>
                <div>
                    <h4 className='col'>Felicitaciones Diego Martínez</h4>
                    <h5 className='col'>Ganador del estacionamiento preferencial:</h5>
                    <div className=''>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Maxime laudantium fugit quaerat doloremque, voluptatum facere aut repellat, 
                        voluptate illo, perspiciatis consectetur aperiam incidunt deserunt ad exercitationem. 
                        Quasi ut eveniet consequatur.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Maxime laudantium fugit quaerat doloremque, voluptatum.
                    </div>
                </div>
            </div>
            <button className='sorteo-verTodos'>
                VERT TODOS
            </button>
        </div>

        <div className='sorteo-card col-1'>
            <h3>Sorteo 1</h3>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Maxime laudantium fugit quaerat doloremque, voluptatum facere aut repellat, 
                voluptate illo, perspiciatis consectetur aperiam incidunt deserunt ad exercitationem. 
                Quasi ut eveniet consequatur.
            </div>
            <button className='sorteo-button'>
                PARTICIPAR
            </button>
        </div>

        <div className='sorteo-card col-1'>
            <h3>Sorteo 2</h3>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Maxime laudantium fugit quaerat doloremque, voluptatum facere aut repellat, 
                voluptate illo, perspiciatis consectetur aperiam incidunt deserunt ad exercitationem. 
                Quasi ut eveniet consequatur.
            </div>
            <button  className='sorteo-button'>
                PARTICIPAR
            </button>
        </div>

        <div className='sorteo-card col-1'>
            <h3>Sorteo 3</h3>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Maxime laudantium fugit quaerat doloremque, voluptatum facere aut repellat, 
                voluptate illo, perspiciatis consectetur aperiam incidunt deserunt ad exercitationem. 
                Quasi ut eveniet consequatur.
            </div>
            <button  className='sorteo-button'>
                PARTICIPAR
            </button>
        </div>

    </div>
  )
}
