import React, { useEffect } from 'react';
import Layout from '../../layout/Layout';
import './AdvertDetailPage.css';
import Photo from '../../shared/Photo';
import { getAdvertDetail } from '../../../api/adverts';
import { Redirect } from 'react-router';

const AdvertDetailPage = ({ className, ...props }) =>{
    const[ad,setAd] = React.useState({advert: {}}, {error:null})

React.useEffect(()=>{
  const { match } = props;
  getAdvertDetail(match.params.advertId)
    .then(adv => setAd(adv))
    .catch(error => setAd({error}));
},[]);
//console.log(advert)
const baseUrlPhoto =`${process.env.REACT_APP_API_BASE_URL}`;
if (ad.error && ad.error.status === 404) {
  console.log(ad.error)
    return <Redirect to="/404" />;
  }
  return (
    <Layout title="Advert Detail" {...props}>
      <div>
        <Photo src={baseUrlPhoto+ad.photo} className="advert-centerImg advert-imgWidth" /> 
      </div>
      <div>{JSON.stringify(ad)}</div>
      <div>{ad.photo}</div>
    </Layout>
  );
}
export default AdvertDetailPage;