import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './css/PostBox.css';
import Tags from './Tags';
import PostDetails from './PostDetails';
import noImg from './img/no_img.png';

const PostBox = function ({ post }) {
  return (
    <Link to={`/post/${post.postId}`} style={{ textDecoration: 'none' }}>
      <div className="post-box">
        <div className="post-box__img" />
        <div className="post-box-info">
          <div className="post-box-info-top">
            <div className="post-box-info__title">{post.title}</div>
            <div className="post-box-info-tag">
              <Tags tags={post.categoryList} />
            </div>
          </div>
          <div className="post-box-info__content">{post.content}</div>
          <div className="post-box-info-bottom">
            <div className="post-box-info-details">
              <PostDetails
                date={post.createdDate}
                views={post.views}
                hearts={post.hearts}
              />
            </div>
            <div className="post-box-info-author">
              <span>{post.userName}</span>
              <img
                src={noImg}
                alt="no-img"
                className="post-box-info-author__img"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

PostBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
};

export default PostBox;
