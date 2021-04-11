import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import Advert, { advertType } from './Advert';

const AdvertsList = ({ adverts }, ...props) => {
  //Inicio de Pruebas de filtrado
  const datoEvalua="Moto"
  const items = adverts.filter((data)=>{
    if(datoEvalua == null)
      return data
    else if(data.name.toLowerCase().includes(datoEvalua.toLowerCase()) ){
      return data
}    
  }).map(data=>{
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
