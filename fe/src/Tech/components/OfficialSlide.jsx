/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import '../css/OfficialSlide.css';
import OfficialPost from './OfficialPost';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return null;
  }, [delay]);
};

const OfficialSlide = function ({ officialPosts }) {
  const POST_NUM = officialPosts.length;
  const [slideArr, setSlideArr] = useState([]); // 복제 슬라이드
  const [currentIndex, setCurrentIndex] = useState(1);
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const [slideTransition, setTransition] = useState('');

  const setSlides = () => {
    const beforeSlide = [];
    const afterSlide = [];
    let index = 0;
    while (index < 1) { // official 포스트가 두개 이하일 경우에 대비
      afterSlide.push(officialPosts[index % POST_NUM]);
      beforeSlide.unshift(officialPosts[POST_NUM - 1 - (index % POST_NUM)]);
      index += 1;
    }
    setSlideArr([...beforeSlide, ...officialPosts, ...afterSlide]);
  };

  useEffect(() => {
    setSlides();
  }, []);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  const getIndex = (index) => {
    let idx = index - 1;
    if (idx < 0) {
      idx += POST_NUM;
    } else if (idx >= POST_NUM) idx -= POST_NUM;
    return idx;
  };

  const replaceSlide = (index) => {
    setTimeout(() => {
      setTransition('');
      setCurrentIndex(index);
    }, transitionTime);
  };

  const handleSlide = (index) => {
    setCurrentIndex(index);
    if (index < 1) {
      index += POST_NUM;
      replaceSlide(index);
    } else if (index >= POST_NUM + 1) {
      index -= POST_NUM;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  };

  useInterval(() => {
    handleSlide(currentIndex + 1);
  }, 2000);

  return (
    <div className="official-slide">
      <div
        className="official-slide-box"
        style={{
          transition: slideTransition,
          transform: `translateX(${
            -1 * ((100 / slideArr.length) * currentIndex)
          }%)`,
        }}
      >
        {slideArr.map((slide, slideIndex) => {
          const itemIndex = getIndex(slideIndex);
          return (
            <div className="official-slide-item">
              <OfficialPost key={slide.id} post={officialPosts[itemIndex]} />
            </div>
          );
        })}
      </div>
      <div className="official-pagination">
        {officialPosts.map((post, index) => (
          <button
            key={post.postId}
            type="button"
            className={
              index === getIndex(currentIndex)
                ? 'official-pagination__button official-pagination__button--current'
                : 'official-pagination__button'
            }
          />
        ))}
      </div>
    </div>
  );
};

OfficialSlide.propTypes = {
  officialPosts: PropTypes.array.isRequired,
};

export default OfficialSlide;
