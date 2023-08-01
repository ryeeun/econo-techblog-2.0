/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import '../css/OfficialPost.css';
import noImg from '../img/no_img.png';
import PostDetails from '../../components/PostDetails';

const OfficialPost = function ({ post }) {
  return (
    <Link to={`/post/${post.postId}`} style={{ textDecoration: 'none' }}>
      <div className="official-post">
        <div className="official-post__img" />
        <div className="official-post-info">
          <div className="official-post-info-title">{post.title}</div>
          <div className="official-post-info__content">{post.content}</div>
          <div className="official-post-info-bottom">
            <div className="official-post-info-bottom-left">
              <img
                src={noImg}
                alt="no-img"
                className="official-post-info-bottom-left__img"
              />
              <span className="official-post-info-bottom-left__span">
                {post.userName}
              </span>
            </div>
            <PostDetails
              createdAt="2023/01/01 00:00:00"
              views={post.views}
              likes={post.likes}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

OfficialPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default OfficialPost;
