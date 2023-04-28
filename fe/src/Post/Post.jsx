import React from 'react';
/* eslint-disable object-shorthand */

import './css/Post.css';
import PostInfo from './components/PostInfo';
import Tags from '../components/Tags';
import PostDesc from './components/PostDesc';
import CommentList from './components/CommentList';
import Liked from './components/Liked';

const data = {
  postId: '1',
  userName: '에코노베이션',
  content: 'dddd',
  title: '에코노베이션 멋알 팀에서 에코노베이션 테크블로그를 제작하였습니다.',
  mainCategoryNumber: '3',
  categoryList: 'HTML, CSS, React',
  createdDate: '2023/01/01 00:00:00',
  views: '21',
  hearts: '21',
};

const Post = function (id) {
  const onDelete = () => {
    console.log(id);
  };
  const onClick = (active) => {
    console.log(active);
  };
  return (
    <div className="post">
      <div className="post-middle">
        <span className="post__title">{data.title}</span>
        <PostInfo
          author={data.userName}
          date={data.createdDate}
          views={data.views}
          hearts={data.hearts}
          onDelete={onDelete(data.postId)}
        />
        <Tags tags={data.categoryList} />
        <PostDesc />
        <Liked active={data.isHeart} setActive={() => onClick(data.isHeart)} />
      </div>
      <div className="post-partition" />
      <CommentList />
    </div>
  );
};

export default Post;
