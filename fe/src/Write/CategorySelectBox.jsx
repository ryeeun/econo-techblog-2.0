/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './css/CategorySelectBox.css';

function CategorySelectBox({ categoryName, setCategoryName }) {
  const [isOpen, setOpen] = useState(false);

  const findCategory = (e) => {
    if (e === 1) return 'TECH';
    if (e === 2) return 'CULTURE';
    return 'TROUBLE SHOOTING';
  };

  const onClick = () => {
    setOpen(!isOpen);
  };

  const onSelect = (e) => {
    setCategoryName(findCategory(e.target.value));
  };

  return (
    <div className="category-select-box" type="button" onClick={onClick}>
      {categoryName === '' ? (
        <span className="category-select-box-text">게시판을 선택하세요</span>
      ) : (
        <span className="category-select-box-text selected">
          {categoryName}
        </span>
      )}
      {isOpen && (
        <ul className="category-select-list">
          <li className="category-select-item" onClick={onSelect} value="1">
            TECH
          </li>
          <li className="category-select-item" onClick={onSelect} value="2">
            CULTURE
          </li>
          <li className="category-select-item" onClick={onSelect} value="3">
            TROUBLE SHOOTING
          </li>
        </ul>
      )}
    </div>
  );
}

CategorySelectBox.propTypes = {
  categoryName: PropTypes.string.isRequired,
  setCategoryName: PropTypes.func.isRequired,
};

export default CategorySelectBox;
