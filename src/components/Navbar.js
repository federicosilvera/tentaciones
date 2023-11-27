import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    
    <div className='flex-container'>
        <Link to="/home"><img width="60px" src='https://i.gyazo.com/fa11643cadb556c7420552a881ad02cd.png' alt='logo de la pagina'></img></Link>
            <ul>
              
                <li><Link className="letras" to="/home">
                Inicio </Link>
                </li>
                <li><Link className="letras" to="/menu">
                Menú</Link>
                </li>
                
                <li><Link className="letras" to="/contact">
                Contacto</Link>
                </li>
                <li>
                <Link className="letras" to="about">
                Nosotros</Link>
            </li>
          </ul>          
    </div>
    </>
  )
}