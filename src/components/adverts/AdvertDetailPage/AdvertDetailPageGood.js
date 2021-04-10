import React from 'react';
import Layout from '../../layout/Layout';
import './AdvertDetailPage.css';
import Photo from '../../shared/Photo';
import { getAdvertDetail } from '../../../api/adverts';
import { Redirect, useHistory } from 'react-router-dom';
import { Button  } from '../../shared';
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

  handlerDelete(idAdvert){
    alert(`Va a borrar el registro núm. ${idAdvert}`)
    //const history = useHistory();
    App2(this.props)
  }
  
  render() {
    const baseUrlPhoto =`${process.env.REACT_APP_API_BASE_URL}`;
    const { advert, error } = this.state;

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
          <Button
                className="loginForm-submit"
                variant="primary"
                onClick={()=>{ window.confirm('Are you sure you wish to delete this item?')?this.handlerDelete(advert.id):console.log('No borrar')}}>
                Delete
            </Button>
        </div>
      </Layout>
    );
    }
  }
const App2 = (props)=>{
  const history = useHistory();
  history.push("/");
}
export default AdvertDetailPage;
