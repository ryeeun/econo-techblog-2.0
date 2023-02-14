import React from 'react';

import './HomeOfficial.css';
import testImg1 from './img/testImg1.png';

const testText = '[2022 WINTER DEV] "술은 곧 숨이다" 아이코 홀릭팀의 칵테일 추천 프로젝트!<오늘의 칵테일>';

function HomeOfficial() {
  return (
    <div className="home-official">
      <h2>Official</h2>
      <div className="home-official-container">
        <div className="home-official-item item-big">
          <img className="home-official-img" src={testImg1} alt="official post" />
          <div className="home-official-background">
            <span className="home-official-text">{testText}</span>
          </div>
        </div>
        <div className="home-official-item item-small">
          <img className="home-official-img" src={testImg1} alt="official post" />
          <div className="home-official-background">
            <span className="home-official-text">{testText}</span>
          </div>
        </div>
        <div className="home-official-item item-small">
          <img className="home-official-img" src={testImg1} alt="official post" />
          <div className="home-official-background">
            <span className="home-official-text">{testText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 오른쪽 post 두개는 map 써서 중복 코드 줄이기

export default HomeOfficial;
