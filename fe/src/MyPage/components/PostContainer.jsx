import React from 'react';

import PostBox from './PostBox';
import '../css/PostContainer.css';

const PostContainer = function () {
  // GET해서 받아온 data 갯수 0이면 텍스트만 출력 되도록 변수 선언
  const posts = ['행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션', '행복한 에코노베이션'];
  return (
    <div className={posts.length < 6 ? 'post-container' : 'post-container-big'}>
      { posts.length === 0 ? <div className="post-container-none">아직 작성한 글이 없습니다.</div> : posts.map((item) => (<PostBox key={item} />))}
    </div>
  );
};

export default PostContainer;
