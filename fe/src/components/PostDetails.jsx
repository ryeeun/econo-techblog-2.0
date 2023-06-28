import React from 'react';
import './css/PostDetails.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import bar from './img/select_bar.png';
import dateImg from './img/day.png';
import viewsImg from './img/feather_eye.png';
import heartsImg from './img/heart.png';

const PostDetails = function ({ createdAt, views, likes }) {
  console.log('dataformat 수정되면 삭제 ', createdAt);
  const formatDate = '2023/01/01 00:00:00'.split(' ')[0].replace(/\//gi, '.');
  return (
    <div className="post-details">
      <img src={dateImg} alt="date" className="post-details__img" />
      <span>{formatDate}</span>
      <img src={bar} alt="|" className="post-details__bar" />
      <img src={viewsImg} alt="views" className="post-details__img" />
      <span>{views}</span>
      <img src={bar} alt="|" className="post-details__bar" />
      <img src={heartsImg} alt="hearts" className="post-details__img" />
      <span>{likes}</span>
    </div>
  );
};

PostDetails.propTypes = {
  createdAt: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default PostDetails;
