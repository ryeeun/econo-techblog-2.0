/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import '../css/Profile.css';
import noImg from '../../components/img/no_img.png';

function Profile() {
  return (
    <div className="profile">
      <h3>프로필</h3>
      <div className="profile-container-top">
        <img src={noImg} alt="profile_img" className="profile__img" />
        <div className="profile-user">
          <p>
            <span className="profile-user-name">에코노베이션</span>
            <span className="profile-text">님</span>
          </p>
          <span className="profile-text">191111@jnu.ac.kr</span>
          <p className="profile-text">
            <span>21</span>
            <span>기</span>
            <span> | </span>
            <span>일반회원</span>
          </p>
        </div>
      </div>
      <div className="profile-container-bottom">
        <div className="profile-container-bottom-like">
          <p className="profile-text">받은 좋아요</p>
          <p>
            <span className="profile-container-bottom-count">0</span>
            <span className="profile-text">개</span>
          </p>
        </div>
        <div className="profile-container-bottom-comment">
          <p className="profile-text">받은 댓글</p>
          <p>
            <span className="profile-container-bottom-count">0</span>
            <span className="profile-text">개</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
