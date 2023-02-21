import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
/* eslint-disable object-shorthand */

import './css/Post.css';
import PostInfo from './components/PostInfo';
import Tags from '../components/Tags';
import PostDesc from './components/PostDesc';
import CommentList from './components/CommentList';
import Liked from './components/Liked';

const GET_POST = gql`
  query getPost($postId: Int!, $userId: Int!) {
    findPostByPostId(id: $postId) {
      postId
      userName
      content
      title
      mainCategoryNumber
      categoryList
      createdDate
      views
      hearts
    }
    isHeart(postId: $postId, userId: $userId)
  }
`;

// 좋아요 상태 업데이트
const SET_LIKED = gql`
  mutation updateHeartState($heartRequest: HeartRequestDto!) {
    updateHeartState(heartRequestDto: $heartRequest)
  }
`;

// 게시물 삭제
const DELETE_POST = gql`
  mutation deletePost($postId: Int!) {
    deletePost(postId: $postId)
  }
`;

const data = {
  postId: '1',
  userName: '에코노베이션',
  content: 'dddd',
  title: '에코노베이션 멋알 팀에서 에코노베이션 테크블로그를 제작하였습니다.',
  mainCategoryNumber: '3',
  categoryList: 'html, css, html, css, html, css, html, css, html, css, html, css, html, css, html, css, html, css, html, css, html, css, html, css',
  createdDate: '2023/01/01 00:00:00',
  views: '21',
  hearts: '21',
};

const Post = function () {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateHeartState] = useMutation(SET_LIKED, {
    // eslint-disable-next-line no-shadow
    update(cache, { data: { updateHeartState } }) {
      const { findPostByPostId } = cache.readQuery({
        query: GET_POST,
        variables: {
          postId: id,
          userId: 1,
        },
      });
      const nowPost = { ...findPostByPostId };
      if (updateHeartState > nowPost.hearts) {
        nowPost.hearts += 1;
        cache.writeQuery({
          query: GET_POST,
          variables: {
            postId: id,
            userId: 1,
          },
          data: { findPostByPostId: nowPost, isHeart: true },
        });
      } else {
        nowPost.hearts -= 1;
        cache.writeQuery({
          query: GET_POST,
          variables: {
            postId: id,
            userId: 1,
          },
          data: { findPostByPostId: nowPost, isHeart: false },
        });
      }
    },
  });
  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: () => {
      navigate(-1); // 삭제 시 이전 페이지로 이동
    },
  });
  const onClick = (active) => {
    updateHeartState({
      variables: {
        heartRequest: {
          postId: id,
          userId: 1,
          isHeart: !active,
        },
      },
    });
  };
  const onDelete = () => {
    deletePost({
      variables: {
        postId: id,
      },
    });
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
          onDelete={onDelete}
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
