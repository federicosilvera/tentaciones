import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    
    <div className='flex-container'>
        <Link to="/home"><img className='img' width="60px" src='https://i.gyazo.com/fa11643cadb556c7420552a881ad02cd.png' alt='logo de la pagina'></img></Link>
            <ul>
              
                <li><Link className="letras" to="/home">
                Inicio </Link>
                </li>
                <li><Link className="letras" to="/menu">
                Menú</Link>
                </li>
                <li>
                <Link className="letras" to="about">
                Nosotros</Link>
            </li>
            
             <a href="https://www.instagram.com/tentaciones_la_chola/?hl=es" target="_blank" rel='noopener noreferrer'><img className='img2' width="30px" src='https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png' alt='instagram'></img></a> 
            
          </ul>          
    </div>
    </>
  )
}