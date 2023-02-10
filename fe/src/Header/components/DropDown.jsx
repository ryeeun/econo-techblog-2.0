import React from 'react';
import { Link } from 'react-router-dom';

import './DropDown.css';

const DropDown = function () {
  return (
    <div className="drop-down">
      <Link className="drop-down__btn" to="/mypage">내 정보</Link>
      <Link className="drop-down__btn" to="/write">새 글 작성</Link>
      <span className="drop-down__logout">로그아웃</span>
    </div>
  );
};

export default DropDown;
