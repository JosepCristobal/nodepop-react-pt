import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import Advert, { advertType } from './Advert';

const AdvertsList = ({ adverts }) => {
 
  //Inicio de Pruebas de filtrado
  const datoEvalua="Embarcación"
  const items = adverts.filter((data)=>{
    //console.log(data.name.toLowerCase())
    if(datoEvalua == null)
      return data
    else if(data.name.toLowerCase().includes(datoEvalua.toLowerCase()) ){
      return data
}    
  }).map(data=>{
    console.log(`Datos llegan al map: ${data.name}`)
    return(
    <div>
      <ul className="advertsList">
        <li key={data.id}>
            <Advert
              {...data}
            />
        </li>
    </ul>
    </div>
    )
  })

  return(<div>{items}</div>)

  
  // Fin de pruebas de filtrado
  
  
  // return (
  //   <ul className="advertsList">
  //     {adverts.map(advert => (
  //       <li key={advert.id}>
  //           <Advert
  //             {...advert}
  //           />
  //       </li>
  //     ))}
  //   </ul>
  // );
};

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape(advertType)),
};

export default AdvertsList;
