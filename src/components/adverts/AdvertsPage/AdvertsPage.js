import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { getLatestAdverts } from '../../../api/adverts';
//import scopedStyles from './TweetsPage.module.css';
import Layout from '../../layout/Layout';
import AdvertsList from './AdvertsList'
import { Button } from '../../shared';
import './AdvertsPage.css';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first Ad!</p>
    <Button as={Link} to="/adverts" variant="primary">
      Advert
    </Button>
  </div>
);

const AdvertsPage = ({ className, ...props }) => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, []);

  return (
    <Layout title="What's going on..." {...props}>
      <div className="advertsPage">
        {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </div>
    </Layout>
  );
};

export default AdvertsPage;