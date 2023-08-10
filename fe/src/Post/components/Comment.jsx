import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import noImg from '../img/no_img.png';

import '../css/Comment.css';
import CommentWrite from './CommentWrite';

const Comment = function ({ name, content }) {
  const [isOpen, setOpen] = useState(false);

  const onClickReply = () => {
    setOpen((cur) => !cur);
  };
  return (
    <div className="comment">
      <div className="comment-box">
        <img src={noImg} alt="no-img" className="comment-box__img" />
        <div className="comment-box-info">
          <span className="comment-box-info__writer">{name}</span>
          <span className="comment-box-info__desc">{content}</span>
          <button
            type="button"
            className="comment-box-info-reply__btn"
            onClick={onClickReply}
          >
            {isOpen ? '답글 취소' : '답글'}
          </button>
        </div>
      </div>
      {isOpen && <CommentWrite />}
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;
