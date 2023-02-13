import React, { useState } from 'react';

import '../css/MyPosts.css';
import PostContainer from './PostContainer';

function MyPosts() {
  const [type, setType] = useState('like');
  const onLikeClick = () => {
    setType(() => 'like');
  };
  const onCommentClick = () => {
    setType(() => 'comment');
  };

  // 게시물들을 담는 박스와 게시물 컴포넌트 따로 생성해서 재사용
  return (
    <div className="my-posts">
      <h3>내가 쓴 글(0)</h3>
      <PostContainer />
      <div className="my-posts-group__nav">
        <button
          className={`my-posts-nav__button ${
            type === 'like' ? 'nav__button--active' : ''
          }`}
          type="button"
          onClick={onLikeClick}
        >
          <span>좋아요(2)</span>
          <div className="my-posts-group__nav-bar" />
        </button>
        <button
          className={`my-posts-nav__button ${
            type === 'comment' ? 'nav__button--active' : ''
          }`}
          type="button"
          onClick={onCommentClick}
        >
          <span>댓글(5)</span>
          <div className="my-posts-group__nav-bar" />
        </button>
      </div>
      <PostContainer />
    </div>
  );
}

export default MyPosts;
