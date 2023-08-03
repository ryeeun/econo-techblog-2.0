import React, { useState } from 'react';
import '../css/CommentWrite.css';
import noImg from '../img/no_img.png';

const CommentBox = function () {
  const [comment, setComment] = useState('');
  const onChange = (e) => {
    setComment(() => e.target.value);
  };
  return (
    <div className="comment-write">
      <img src={noImg} alt="no-img" className="comment-write__img" />
      <div className="comment-write__info">
        <span className="comment-write__writer">이서현</span>
        <div className="comment-write__content">
          <textarea className="comment-write__input" onChange={onChange} />
          <button
            type="button"
            disabled={!comment}
            className="comment-write__button"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
