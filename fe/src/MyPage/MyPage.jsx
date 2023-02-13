import React from 'react';

import './css/MyPage.css';
import MyPosts from './components/MyPosts';
import Profile from './components/Profile';

function MyPage() {
  return (
    <div className="my-page">
      <div className="my-page-wallpaper-color" />
      <div className="my-page__content">
        <Profile />
        <MyPosts />
      </div>
    </div>
  );
}

export default MyPage;
