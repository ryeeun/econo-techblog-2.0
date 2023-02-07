import React from 'react';

import './HomeBanner.css';
import facebook from './img/facebook.png';
import insta from './img/insta.png';
import youtube from './img/youtube.png';
import blog from './img/blog.png';
import mainTypo from './img/main_typo.webp';

function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="home-banner-side">
        <p className="home-banner-side__text">econovation tech blog</p>
      </div>
      <div className="home-banner-middle">
        <h1>T-ECONO</h1>
        <img className="home-banner-middle-typo" src={mainTypo} alt="홈 배너 이미지" />
      </div>
      <div className="home-banner-button__container">
        <a
          className="home-banner__link"
          href="https://www.instagram.com/cnu_econovation/"
        >
          <img src={insta} alt="banner button" />
        </a>
        <a
          className="home-banner__link"
          href="https://www.facebook.com/econo.jnu.ac.kr/"
        >
          <img src={facebook} alt="banner button" />
        </a>
        <a className="home-banner__link" href="https://medium.com/econovation">
          <img src={blog} alt="banner button" />
        </a>
        <a
          className="home-banner__link"
          href="https://www.youtube.com/channel/UCepdmgc4w5EQIc1J0lqXVtA"
        >
          <img src={youtube} alt="banner button" />
        </a>
      </div>
    </div>
  );
}

export default HomeBanner;
