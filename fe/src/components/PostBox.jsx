import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './css/PostBox.css';
import Tags from './Tags';
import PostDetails from './PostDetails';
import noImg from './img/no_img.png';

const PostBox = function ({ post }) {
  let tagLength = 0;
  const tagArray = [];
  post.categoryList.split(',').every((elem) => {
    if (tagLength + elem.length < 20) {
      tagLength += elem.length;
      tagArray.push(elem);
      return true;
    }
    return false;
  });
  return (
    <Link to={`/post/${post.postId}`} style={{ textDecoration: 'none' }}>
      <div className="post-box">
        <div className="post-box__img" />
        <div className="post-box-info">
          <div className="post-box-info-top">
            <div className="post-box-info__title">{post.title}</div>
            <div className="post-box-info-tag">
              <Tags tags={tagArray.join(', ')} />
            </div>
          </div>
          <div className="post-box-info__content">{post.content}</div>
          <div className="post-box-info-bottom">
            <div className="post-box-info-details">
              <PostDetails
                createdAt={post.createdAt}
                views={post.views}
                likes={post.likes}
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
