import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Tentaciones la Chola</p>
      <p>¿Estas buscando un rico gustito?</p>
      <p>Pues estas en el lugar correcto <Link to="./menu">ver antojos</Link> </p>
    </div>
  );
}

export default Home;
