import React from 'react';

import './HomeOffical.css';
import testImg1 from './img/testImg1.png';
import testImg2 from './img/testImg2.png';
import testImg3 from './img/testImg3.png';

const testText = '[2022 WINTER DEV] "술은 곧 숨이다" 아이코 홀릭팀의 칵테일 추천 프로젝트!<오늘의 칵테일>';

function HomeOffical() {
  return (
    <div className="home-official">
      <h2>Official</h2>
      <div className="home-official-post__container">
        <div className="home-official-post__container--left">
          <img className="home-official-post-img" src={testImg1} alt="official post" />
          <div className="home-official-post-background">
            <span className="home-official-post-text">{testText}</span>
          </div>
        </div>
        <div className="home-official-post__container--right">
          <div className="home-official-post__container--right-element">
            <img className="home-official-post-img" src={testImg2} alt="official post" />
            <div className="home-official-post-background--right">
              <span className="home-official-post-text">{testText}</span>
            </div>
          </div>
          <div className="home-official-post__container--right-element">
            <img className="home-official-post-img" src={testImg3} alt="official post" />
            <div className="home-official-post-background--right">
              <span className="home-official-post-text">{testText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 오른쪽 post 두개는 map 써서 중복 코드 줄이기

export default HomeOffical;
