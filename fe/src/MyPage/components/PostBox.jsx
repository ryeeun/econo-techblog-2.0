import React from 'react';

import '../css/PostBox.css';
import defaultImg from '../../components/img/default_img.png';

const PostBox = function () {
  return (
    <div className="post-box">
      <img className="post-box-img" src={defaultImg} alt="게시물" />
      <div className="post-box-background">
        <span className="post-box-title">행복한 에코노베이션</span>
      </div>
    </div>
  );
};

export default PostBox;
