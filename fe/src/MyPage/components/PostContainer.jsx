import React from 'react';

import PostBox from './PostBox';
import '../css/PostContainer.css';

const PostContainer = function () {
  // GET해서 받아온 data 갯수 0이면 텍스트만 출력 되도록 변수 선언
  return (
    <div className="post-container">
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
    </div>
  );
};

export default PostContainer;
