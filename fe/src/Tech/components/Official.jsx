/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Official.css';
import noImg from '../img/no_img.png';
import PostDetails from '../../components/PostDetails';
import Tags from '../../components/Tags';

const data = [
  {
    postId: '1',
    userName: '에코노베이션',
    content: 'dddd',
    title: '1에코노베이션 멋알',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React',
    createdDate: '2023/01/01 00:00:00',
    views: '21',
    hearts: '21',
  },
  {
    postId: '2',
    userName: '에코노베이션',
    content: 'dddd',
    title: '2에코노베이션 멋알',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React',
    createdDate: '2023/01/01 00:00:00',
    views: '21',
    hearts: '21',
  },
  {
    postId: '3',
    userName: '에코노베이션',
    content: 'dddd',
    title: '3에코노베이션 멋알',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React',
    createdDate: '2023/01/01 00:00:00',
    views: '21',
    hearts: '21',
  },
];

const Official = function () {
  const [officialPosts, setOfficialPosts] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setOfficialPosts(data);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentValue) => {
        if (currentValue < officialPosts.length - 1) {
          return currentValue + 1;
        }
        return 0;
      });
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const onClick = (direction) => {
    setCurrentIndex(direction);
  };

  if (officialPosts === undefined) return null;
  return (
    <div className="official">
      <Link
        to={`/post/${officialPosts[currentIndex].postId}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="official-post">
          <div className="official__img" />
          <div className="official-info">
            <div className="official-info-top">
              <span className="official-title">{officialPosts[currentIndex].title}</span>
              <Tags tags={officialPosts[currentIndex].categoryList} />
            </div>
            <div className="official-info-middle">
              <span className="official-info__content">에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션</span>
            </div>
            <div className="official-info-bottom">
              <div className="official-info-bottom-left">
                <img
                  src={noImg}
                  alt="no-img"
                  className="official-info-bottom-left__img"
                />
                <span className="official-info-bottom-left__span">
                  {officialPosts[currentIndex].userName}
                </span>
              </div>
              <PostDetails
                date="2023/01/01 00:00:00"
                views={officialPosts[currentIndex].views}
                hearts={officialPosts[currentIndex].hearts}
              />
            </div>
          </div>
        </div>
      </Link>
      <div className="official-bottom">
        {officialPosts.map((post, index) => (
          <button
            key={post.postId}
            type="button"
            onClick={() => onClick(index)}
            className={
              currentIndex === index
                ? 'official__button official__button--current'
                : 'official__button'
            }
          />
        ))}
      </div>
    </div>
  );
};
export default Official;
