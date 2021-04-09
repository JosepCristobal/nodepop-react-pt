import React from 'react';
import './NewAdvertPage.css';
import Layout from '../../layout/Layout';
import NewAdvertForm from './NewAdvertForm';
//import { Photo } from '../../shared';
//import defaultPhoto from '../../../assets/default_profile.png';
import { createAdvert } from '../../../api/adverts';

import './NewAdvertPage.css';
import { Redirect } from 'react-router';

const NewAdvertPage = props => {
  const [error, setError] = React.useState(null);
  const [createdAdvert, setCreatedAdvert] = React.useState(null);

  const handleSubmit = async newAdvert => {
    try {
      const advert = await createAdvert(newAdvert);
      setCreatedAdvert(advert);
    } catch (error) {
      setError(true);
    }
  };

  if (error && error.status === 401) {
    return <Redirect to="/adverts" />;
  }

  if (createdAdvert) {
    return <Redirect to={`/advert/${createdAdvert.id}`} />;
  }

  return (
    <Layout title="What are you thinking?" {...props}>
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
