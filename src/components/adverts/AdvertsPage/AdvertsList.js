import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import Advert, { advertType } from './Advert';

// const renderTweet = history => tweet => (
//   <Tweet key={tweet.id} {...tweet} history={history} />
// );

const AdvertsList = ({ adverts }) => {
  // const handleClick = tweetId => {
  //   history.push(`/tweet/${tweetId}`);
  // };

  return (
    <ul className="advertsList">
      {adverts.map(advert => (
        <li key={advert.id}>
          <Link to={`/adverts/${advert.id}`}>
            <Advert
              {...advert}
              // history={history}
              // onClick={() => handleClick(tweet.id)}
            />
          </Link>
        </li>
      ))}
      {/* {tweets.map(renderTweet(history))} */}
    </ul>
  );
};

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape(advertType)),
};

export default AdvertsList;
