/* eslint-disable no-restricted-globals */
/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import noImg from '../img/no_img.png';
import '../css/UserInfo.css';
import PostList from './PostList';

// 게시물 삭제
const DELETE_POST = gql`
  mutation deletePost($postId: Int!) {
    deletePost(postId: $postId)
  }
`;

const testUser = {
  uid: 1,
  name: '이윤성',
  email: '191111@jnu.ac.kr',
  role: '일반회원',
  year: 21,
};

const UserInfo = function () {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [checkedList, setCheckedList] = useState([]);
  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: () => {
      location.reload(); // 삭제 시 이전 페이지로 이동
    },
  });
  useEffect(() => {
    axios
      .get(`http://168.131.30.127:8080/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
        console.log(user);
      })
      .catch((error) => {
        console.log('erroe', error);
      });
  }, []);

  const onChange = (checked, item) => {
    if (checked) {
      setCheckedList((checkedList) => [...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };
  const onDelete = () => {
    checkedList.forEach((postId) => {
      deletePost({
        variables: {
          postId: postId,
        },
      });
    });
  };

  return (
    <div className="userinfo">
      <div className="userinfo-top">
        <img src={noImg} alt="no profile" className="userinfo__img" />
        <div className="userinfo-spec">
          <span className="userinfo__name">{testUser.name}</span>
          <span>{testUser.email}</span>
          <span>{`${testUser.year}기  |  ${testUser.role}`}</span>
          <span>작성글 6</span>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="userinfo-delete__button"
        >
          삭제
        </button>
      </div>
      <PostList uid={testUser.uid} onChange={onChange} />
    </div>
  );
};

export default UserInfo;
