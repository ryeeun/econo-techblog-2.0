import React, { useEffect, useState } from 'react';
/* eslint-disable object-shorthand */
import axios from 'axios';

import './css/Post.css';
import PostInfo from './components/PostInfo';
import Tags from '../components/Tags';
import PostDesc from './components/PostDesc';
import CommentList from './components/CommentList';
import Liked from './components/Liked';

// const data = {
//   postId: '1',
//   userName: '에코노베이션',
//   content: 'dddd',
//   title: '에코노베이션 멋알 팀에서 에코노베이션 테크블로그를 제작하였습니다.',
//   mainCategoryNumber: '3',
//   categoryList: 'HTML, CSS, React, Tecono, Econovation, 멋알',
//   createdDate: '2023/01/01 00:00:00',
//   views: '21',
//   hearts: '21',
// };

const Post = function (id) {
  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TECONO_API_URL}/boards/1`)
      .then((response) => {
        console.log(response);
        setPost(response.data.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  const onDelete = () => {
    console.log(id);
  };

  const onClick = (active) => {
    console.log(active);
  };
  if (post === undefined) return null;
  return (
    <div className="post">
      <div className="post-middle">
        <span className="post__title">{post.title}</span>
        <PostInfo post={post} onDelete={onDelete(post.post_id)} />
        <div className="post-tag">
          <Tags tags={post.hashtag} />
        </div>
        <PostDesc />
        <Liked active={false} setActive={() => onClick(true)} />
      </div>
      <div className="post-partition" />
      <CommentList />
    </div>
  );
};

export default Post;
