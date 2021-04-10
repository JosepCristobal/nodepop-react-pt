import React from 'react';
import T from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

//import LikeButton from './LikeButton';
import Photo from '../../shared/Photo';
import defaultPhoto from '../../../assets/default_profile.png';
import './Advert.css';

const Advert = ({ content, createdAt, name, sale, price, tags, photo}) => {
  // const handleLike = ev => {
  //   ev.preventDefault();
  //   // Manage like/unlike flow
  //   console.log(ev);
  // };
  const baseUrlPhoto =`${process.env.REACT_APP_API_BASE_URL}`
  return (
    <article className="advert bordered">
      <div className="left">
        {/* <Photo src={defaultPhoto} className="advert-photo" />  */}
        <Photo src={baseUrlPhoto+photo} className="advert-centerImg advert-imgWidth" /> 
      </div>
      <div className="right">
        <div className="advert-header">
          <span className="advert-name">{name}</span><br/>
          <span className="advert-username">{price}</span><br/>
          <span className="advert-username">{sale}</span><br/>
          <span className="advert-username">{tags}</span><br/>
          <time dateTime={createdAt}>
            {formatDistanceToNow(new Date(createdAt))}
          </time>
        </div>
        <div>
          {content}
          <div className="advert-actions">
            {/* <LikeButton onLike={handleLike}>{likes.length || null}</LikeButton> */}
          </div>
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

Advert.defaultProps = {
  content: 'Nothing here!',
};

export default Advert;
