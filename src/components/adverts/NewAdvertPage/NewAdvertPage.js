import React from 'react';
import './NewAdvertPage.css';
import Layout from '../../layout/Layout';
import NewAdvertForm from './NewAdvertForm';
//import { Photo } from '../../shared';
//import defaultPhoto from '../../../assets/default_profile.png';
import { createAdvert, createAdvertPhoto } from '../../../api/adverts';

import './NewAdvertPage.css';
import { Redirect } from 'react-router';

const NewAdvertPage = props => {
  const [error, setError] = React.useState(null);
  const [createdAdvert, setCreatedAdvert] = React.useState(null);
  

  const handleSubmit = async newAdvert => {
    try {
      let advert;
      
      // if (newAdvert.photo === undefined){
      //   console.log('Photo vacía')
      //   advert = await createAdvert(newAdvert);
      // } else{
      //   console.log('Photo llena')
        advert = await createAdvertPhoto(newAdvert);
      // }
      setCreatedAdvert(advert);
    } catch (error) {
      setError(true);
    }
  };
  

  if (error && error.status === 401) {
    return <Redirect to="/adverts" />;
  }

  if (createdAdvert) {
    return <Redirect to={`/adverts/${createdAdvert.id}`} />;
  }

  return (
    <Layout title="Nuevo anuncio, suerte en tu operación" {...props}>
      <div className="newAdvertPage bordered" style={{ borderBottomWidth: 10 }}>
        <div className="left">
          {/* <Photo src={defaultPhoto} alt="" /> */}
        </div>
        <div className="right">
          <NewAdvertForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default NewAdvertPage;
