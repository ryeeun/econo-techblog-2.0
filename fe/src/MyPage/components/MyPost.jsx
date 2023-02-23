import React from 'react';

import '../css/MyPost.css';
import defaultImg from '../../components/img/default_img.png';

const MyPost = function () {
  return (
    <div className="my-post">
      <img className="my-post-img" src={defaultImg} alt="게시물" />
      <div className="my-post-background">
        <span className="my-post-title">행복한 에코노베이션</span>
      </div>
    </div>
  );
};

export default MyPost;
