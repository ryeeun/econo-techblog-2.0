import React, { useEffect, useState } from 'react';
import './RecentPosts.css';
import { gql, useQuery } from '@apollo/client';

import RecentPost from './components/RecentPost';
import bg from './img/main_recents_bg.png';

const GET_POSTS = gql`
  query findAllPosts($mainCategoryNumber: Int!, $page: Int!) {
    findAllPosts(mainCategoryNumber: $mainCategoryNumber, page: $page) {
      postId
      userName
      content
      title
      mainCategoryNumber
      categoryName
      createdDate
      views
      hearts
    }
  }
`;

const posts = {
  data: [
    {
      title: '[ECONO PEOPLE #20] 일상은 즐겁게 인생은 진지',
      content: '안녕하세요 에코노베이션 김정인입니다. ECONO PEOPLE은 에코노베이션 구성원의 이야기를 담은 인터뷰입니다.  ECONO PEOPLE은 에코노베이션',
      categoryName: 'html,css',
      userName: '에코노베이션',
      createdDate: '2023/01/01 00:00:00',
    },
    {
      title: '[ECONO PEOPLE #20] 일상은 즐겁게 인생은 진지',
      content: '안녕하세요 에코노베이션 김정인입니다. ECONO PEOPLE은 에코노베이션 구성원의 이야기를 담은 인터뷰입니다.',
      categoryName: 'html,css',
      userName: '에코노베이션',
      createdDate: '2023/01/01 00:00:00',
    },
    {
      title: '[ECONO PEOPLE #20] 일상은 즐겁게 인생은 진지',
      content: '안녕하세요 에코노베이션 김정인입니다. ECONO PEOPLE은 에코노베이션 구성원의 이야기를 담은 인터뷰입니다.',
      categoryName: 'html,css',
      userName: '에코노베이션',
      createdDate: '2023/01/01 00:00:00',
    },
    {
      title: '[ECONO PEOPLE #20] 일상은 즐겁게 인생은 진지',
      content: '안녕하세요 에코노베이션 김정인입니다. ECONO PEOPLE은 에코노베이션 구성원의 이야기를 담은 인터뷰입니다.',
      categoryName: 'html,css',
      userName: '에코노베이션',
      createdDate: '2023/01/01 00:00:00',
    },
    {
      title: '[ECONO PEOPLE #20] 일상은 즐겁게 인생은 진지',
      content: '안녕하세요 에코노베이션 김정인입니다. ECONO PEOPLE은 에코노베이션 구성원의 이야기를 담은 인터뷰입니다.',
      categoryName: 'html,css',
      userName: '에코노베이션',
      createdDate: '2023/01/01 00:00:00',
    },
    {
      title: '[ECONO PEOPLE #20] 일상은 즐겁게 인생은 진지',
      content: '안녕하세요 에코노베이션 김정인입니다. ECONO PEOPLE은 에코노베이션 구성원의 이야기를 담은 인터뷰입니다.',
      categoryName: 'html,css',
      userName: '에코노베이션',
      createdDate: '2023/01/01 00:00:00',
    },
  ],
};

const RecentPosts = function () {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [currCategory, setCurrCategory] = useState(1);
  const [navArr, setArr] = useState([
    {
      id: 1,
      name: 'Tech',
      active: true,
    },
    {
      id: 2,
      name: 'Culture',
      active: false,
    },
    {
      id: 3,
      name: 'Trouble Shooting',
      active: false,
    },
  ]);
  const { data } = useQuery(GET_POSTS, {
    variables: {
      mainCategoryNumber: currCategory,
      page: 0,
    },
  });
  console.log('recentposts', currentPosts);
  useEffect(() => {
    if (data) {
      const slicePosts = data.findAllPosts;
      if (slicePosts.length > 6) {
        setCurrentPosts(slicePosts.slice(0, 7));
      } else {
        setCurrentPosts(slicePosts);
      }
    }
  }, [data, currCategory]);
  const onClick = (id) => {
    setArr(
      navArr.map((item) => {
        const elem = item;
        if (elem.id === id) {
          elem.active = true;
        } else {
          elem.active = false;
        }
        return elem;
      }),
    );
    setCurrCategory(id);
  };
  return (
    <div className="recent-posts">
      <img className="recent-posts-bg" src={bg} alt="배경 이미지" />
      <h2 className="recent-posts__title">Recent Posts</h2>
      <div className="recent-posts-nav">
        {navArr.map((elem) => (
          <div>
            <button
              key={elem.id}
              type="button"
              className={
                elem.active
                  ? 'recent-posts__nav-item recent-posts__nav-item--active'
                  : 'recent-posts__nav-item'
              }
              onClick={() => onClick(elem.id)}
            >
              <span>{elem.name}</span>
              <div className="recent-posts__nav-item-bar" />
            </button>
          </div>
        ))}
      </div>
      <div className="recent-posts-box">
        {posts.data.map((item) => (
          <RecentPost key={item.id} post={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
