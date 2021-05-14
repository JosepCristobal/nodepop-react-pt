import React from 'react';
import T from 'prop-types';
import Advert, { advertType } from './Advert';

const AdvertsList = ({items}) => {
  //console.log(`Filtro en detalle name: ${items}`)
 //Las pruebas de filtrado las he intentado hacer en local y me ha faltado el poder aplicar el filtro dinámico.
 //Haciendo pruebas con filtros manuales como datoEvalua="Moto" funciona correctamente.
 //El tiempo que queda no da para más y hasta aquí he llegado.
 //Subo la práctica y si me da tiempo hasta 23.50h haré otra intentona.
  //Inicio de Pruebas de filtrado
//  console.log(`Filtro en detalle name: ${name}`)
  const itemsR = items.map(data=>{
    return(
    <div key={data.id}>
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

  return(<div>{itemsR}</div>)

  
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
