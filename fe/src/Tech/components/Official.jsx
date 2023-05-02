/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useRef } from 'react';

import '../css/Official.css';
import OfficialSlide from './OfficialSlide';

const data = [
  {
    postId: '1',
    userName: '에코노베이션',
    content:
      'React를 조금만이라도 공부해본 사람이 위 코드를 보게 되면 틀림없이 잘못된 코드라고 말할겁니다. 그 사람에게 저 코드가 왜 잘못됐냐고 물어보면 뭐라고 대답할까요? 장담은 못하겠지만 아마 많은 사람들이 "React에서 그렇게 쓰지 말래" 라고 말할것 같습니다.같은 사람에게 "왜 React에서 저렇게 쓰지 말래?" 라고 물어보면 이번에도 장담은 못하겠지만 아마도 "오... 그거까지는 모르겠는데...?" 라고 대답할것 같습니다. 저도 최근에 같은 질문을 받은 후 마찬가지의 대답을 했고 그것이 이번 포스팅을 하게 된 이유입니다. 혹시라도 이 글을 보고 계신 여러분께 다시 한번 물어보겠습니다. "왜 React에서 저렇게 쓰지 말래요?" 이 질문에 대한 대답을 할 수 있는 분은 이글을 보지 않으셔도 좋습니다.',
    title: 'React hook은 왜 컴포넌트 최상단에서만 동작할까?',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React, CSS, React',
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
    views: '22',
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
    views: '23',
    hearts: '21',
  },
];

const Official = function () {
  const slideRef = useRef();
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

  // const handleSlider = (index) => {
  //   if (index === 5) {
  //     slideRef.current.style.transform = 'translateX(0)';
  //   } else {
  //     slideRef.current.style.transform = `translateX(-${
  //       window.innerWidth * count
  //     }px)`;
  //   }
  // };

  if (officialPosts === undefined) return null;
  return (
    <div className="official">
      <OfficialSlide
        officialPosts={officialPosts}
        slideRef={slideRef}
        currentIndex={currentIndex}
      />
      <div className="official-pagination">
        {officialPosts.map((post, index) => (
          <button
            key={post.postId}
            type="button"
            className={
              currentIndex === index
                ? 'official-pagination__button official-pagination__button--current'
                : 'official-pagination__button'
            }
          />
        ))}
      </div>
    </div>
  );
};
export default Official;
