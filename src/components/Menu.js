import React from 'react';
import { MapMenu } from './MapMenu';
const myArray=   [
  {id:1, name:"Cockie",
  price:"200$",
  food:<img className='image' width="200px" height="200px"  src="https://i.gyazo.com/8f61e41e7845660aebfc5c75b7c79cff.jpg" alt="galleta cockie"></img>},
  {id:2, name:"Torta de Chocolate",
  price:"400$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/4e2293218d67211a3566c1a1054fb5a2.png" alt="Torta de chocolate"></img>},
  {id:3, name:"Masitas",
  price:"300$",
  food:<img className='image' width="200px" height="200px"  src="https://i.gyazo.com/5193227f1af29647a2d0b4b2c8450e3e.jpg" alt="Masitas"></img>},
  {id:4, name:"Torta con durazno",
  price:"400$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/704cd5d2427e78e07eba5fe8848c00b4.jpg" alt="Torta con durazno"></img>},
  {id:5, name:"Torta con merengue",
  price:"400$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/ae2e90f599c3bccc5f611a0560472c9a.jpg" alt="Torta con merengue"></img>},
  {id:6, name:"Alfajores",
  price:"200$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/e9acf18b4cfb7def5af74c832a8a1ae4.jpg" alt="Alfajores"></img>},
  {id:7, name:"Torta con membrillo",
  price:"400$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/68627a4184941abebf7cb16ce5b265f0.jpg" alt="Torta con membrillo"></img>},
  {id:8, name:"Alfajores",
  price:"200$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/4fe913ed43f60e2e3fe74b5026f40080.jpg" alt="Alfajores"></img>},
  {id:9, name:"Pie de Limon",
  price:"400$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/7e4c52569f67f2173bde87b1650bf268.jpg" alt="Pie de Limon"></img>},
  {id:10, name:"Donas",
  price:"200$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/f130d54c15dbcd058ff2f00d05e7472e.jpg" alt="Donas"></img>},
  {id:11, name:"Torta dulce de leche",
  price:"400$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/dc3cadb7e3cba60be7fc216b9657c018.jpg" alt="Torta"></img>},
  {id:12, name:"Torta dulce de leche",
  price:"400$",
  food:<img className='image' width="200px" height="200px" src="https://i.gyazo.com/d1b06cf91d0d1ba31050caa9f00ce25d.png" alt="Torta"></img>},
];

const Menu = () => {
  return (
    <>
      <MapMenu comida={myArray}/>
    </>
  );
}

export default Menu;
