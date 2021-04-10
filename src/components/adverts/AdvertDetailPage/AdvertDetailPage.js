import React, { useEffect } from 'react';
import Layout from '../../layout/Layout';
import './AdvertDetailPage.css';
import Photo from '../../shared/Photo';
import { getAdvertDetail, deleteAdvert } from '../../../api/adverts';
import { Redirect, useHistory } from 'react-router';
import { Button  } from '../../shared';

const AdvertDetailPage = ({ className, ...props }) =>{
    const[ad,setAd] = React.useState({advert: {}, error:null})
    const { match } = props;

  React.useEffect(()=>{
    getAdvertDetail(match.params.advertId)
      .then(adv => setAd(adv))
      .catch(error => setAd({error}));
  },[]);

const history = useHistory();
const handlerDelete = async (idAdvert) =>{
  alert(`Va a borrar el registro núm. ${idAdvert}`)
  try {
    const advertDel = await deleteAdvert(idAdvert);
    console.log (advertDel)
  } catch (error) {
    console.log(error)
  }


  history.push("/");
}

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
    <div>
      <p>Descripción: {ad.name}</p>
      <p>Tipo: {ad.sale ? 'Venta':'Compra'}</p>
      <p>Precio: {ad.price}</p>
      <p>Categoría: {ad.tags}</p>
      <p>Publicado hace: {ad.createdAt}</p>
      <Button
            className="loginForm-submit"
            variant="primary"
            onClick={()=>{ window.confirm('Are you sure you wish to delete this item?')?handlerDelete(ad.id):console.log('No borrar')}}>
            Delete
        </Button>
    </div>
  </Layout>
  );
}
export default AdvertDetailPage;