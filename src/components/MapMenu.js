import React from 'react'
import "./menu.css"



export const MapMenu = ({comida}) => {
  return (
    <>
    <div >
        {comida.map(comidas=>
            <div className='main-container' key={comidas.id}>
              <div className='img-container'>{comidas.food} </div>
                <p className='names-container'>{comidas.name} {comidas.price}</p>
                
            </div>
        
        )}        
    </div>
    </>
  )
}