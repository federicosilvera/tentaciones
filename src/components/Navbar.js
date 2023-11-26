import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    
    <div className='flex-container'>
        <h1 className='icon'><Link to="/home">Tentaciones la Chola</Link></h1> 
            <ul>
              
                <li><Link to="/home">
                Inicio </Link>
                </li>
                <li><Link to="/menu">
                Menú</Link>
                </li>
                
                <li><Link to="/contact">
                Contacto</Link>
                </li>
                <li>
                <Link to="about">
                Nosotros</Link>
            </li>
          </ul>          
    </div>
    </>
  )
}