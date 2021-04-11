import React from 'react';
import T from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Button  } from '../../shared';
import { useHistory } from "react-router-dom";
import defaultPhoto from '../../../assets/default_profile.png';
import './Advert.css';

const Advert = ({createdAt, name, sale, price, tags, id}) => {
  
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/adverts/${id}`; 
    history.push(path);
  }

  return (
    <article className="advert bordered">
    
      <div className="right">
        <div className="advert-header">
          <span className="advert-name">Descripcion: {name}</span><br/>
          <span className="advert-username">Precio producto: {price}</span><br/>
          <span className="advert-username">Tipo de transacción: {sale}</span><br/>
          <span className="advert-username">Clasificación :{tags}</span><br/>
          <time dateTime={createdAt}>
            Se publicó hace :{formatDistanceToNow(new Date(createdAt))}
          </time><br></br>
          <Button
            className="loginForm-submit"
            variant="primary"
            onClick={routeChange}>
            Detalle
          </Button>
        </div>
      </div>
    </article>
  );
};

export const advertType = {
//   user: T.shape({ name: T.string.isRequired, username: T.string.isRequired })
//     .isRequired,
//   updatedAt: T.string.isRequired,
//   content: T.string,
  //likes: T.arrayOf(T.shape({ userId: T.string.isRequired }).isRequired)
   // .isRequired,
};

Advert.propTypes = advertType;

export default Advert;
