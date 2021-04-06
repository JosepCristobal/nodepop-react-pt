import React from 'react';
import T from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

//import LikeButton from './LikeButton';
import Photo from '../../shared/Photo';
import defaultPhoto from '../../../assets/default_profile.png';
import './Advert.css';

const Advert = ({ content, updatedAt, user, likes }) => {
  const handleLike = ev => {
    ev.preventDefault();
    // Manage like/unlike flow
    console.log(ev);
  };

  return (
    <article className="advert bordered">
      <div className="left">
        <Photo src={defaultPhoto} className="advert-photo" />
      </div>
      <div className="right">
        <div className="advert-header">
          <span className="advert-name">{user.name}</span>
          <span className="advert-username">{user.username}</span>
          <span className="advert-separator">·</span>
          <time dateTime={updatedAt}>
            {formatDistanceToNow(new Date(updatedAt))}
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
  user: T.shape({ name: T.string.isRequired, username: T.string.isRequired })
    .isRequired,
  updatedAt: T.string.isRequired,
  content: T.string,
  //likes: T.arrayOf(T.shape({ userId: T.string.isRequired }).isRequired)
   // .isRequired,
};

Advert.propTypes = advertType;

Advert.defaultProps = {
  content: 'Nothing here!',
};

export default Advert;
