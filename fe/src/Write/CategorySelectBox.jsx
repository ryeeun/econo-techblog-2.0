/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './css/CategorySelectBox.css';

function CategorySelectBox({ categoryNum, setCategoryNum }) {
  const [isOpen, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('게시판을 선택하세요');
  const onClick = () => {
    setOpen(!isOpen);
  };

  const findCategory = (e) => {
    if (e === 0) return '게시판을 선택하세요';
    if (e === 1) return 'Tech';
    if (e === 2) return 'Culture';
    return 'Trouble Shooting';
  };

  const onSelect = (e) => {
    setCategoryNum(e.target.value);
  };

  useEffect(() => {
    setCategoryName(findCategory(categoryNum));
  }, [categoryNum]);
  return (
    <div className="category-select-box" type="button" onClick={onClick}>
      <span className={categoryNum !== 0 ? 'category-select-box-text selected' : 'category-select-box-text'}>{categoryName}</span>
      {isOpen && (
      <ul className="category-select-list">
        <li className="category-select-item" onClick={onSelect} value="1">Tech</li>
        <li className="category-select-item" onClick={onSelect} value="2">Culture</li>
        <li className="category-select-item" onClick={onSelect} value="3">Trouble Shooting</li>
      </ul>
      )}
    </div>
  );
}

CategorySelectBox.propTypes = {
  categoryNum: PropTypes.number.isRequired,
  setCategoryNum: PropTypes.func.isRequired,
};

export default CategorySelectBox;
