import React from 'react';
import Layout from '../../layout/Layout';
import './AdvertDetailPage.css';
import Photo from '../../shared/Photo';
import { getAdvertDetail } from '../../../api/adverts';
import { Redirect } from 'react-router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

class AdvertDetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      advert: {},
      error: null,
    };
  }
  
  componentDidMount() {
    const { match } = this.props;
    getAdvertDetail(match.params.advertId)
      .then(advert => this.setState({ advert }))
      .catch(error => this.setState({ error }));
  }
  
  render() {
    const baseUrlPhoto =`${process.env.REACT_APP_API_BASE_URL}`;
    const { advert, error } = this.state;
    console.log(advert.photo)

    if (error && error.status === 404) {
      return <Redirect to="/404" />;
    }
    return (
      <Layout title="Advert Detail" {...this.props}>
        <div>
          <Photo src={baseUrlPhoto+advert.photo} className="advert-centerImg advert-imgWidth" />
        </div>
        <div>
          <p>Descripción: {advert.name}</p>
          <p>Tipo: {advert.sale ? 'Venta':'Compra'}</p>
          <p>Precio: {advert.price}</p>
          <p>Categoría: {advert.tags}</p>
          <p>Publicado hace: {advert.createdAt}</p>
        </div>
        {/* <div>{JSON.stringify(advert)}</div> */}
        <div></div>
      </Layout>
    );
    }
  }

export default AdvertDetailPage;
