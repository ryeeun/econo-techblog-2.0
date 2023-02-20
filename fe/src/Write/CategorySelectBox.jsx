/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import './css/CategorySelectBox.css';

function CategorySelectBox() {
  const [isOpen, setOpen] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [category, setCategory] = useState('게시판을 선택해주세요');
  const onClick = () => {
    setOpen(!isOpen);
  };

  const onSelect = (e) => {
    setSelected(true);
    console.log(e.target.value);
    if (e.target.value === 0) setCategory('Tech');
    else if (e.target.value === 1) setCategory('Culture');
    else setCategory('Trouble Shooting');
  };

  return (
    <div className="category-select-box" type="button" onClick={onClick}>
      <span className={isSelected ? 'category-select-box-text selected' : 'category-select-box-text'}>{category}</span>
      {isOpen && (
      <ul className="category-select-list">
        <li className="category-select-item" onClick={onSelect} value="0">Tech</li>
        <li className="category-select-item" onClick={onSelect} value="1">Culture</li>
        <li className="category-select-item" onClick={onSelect} value="2">Trouble Shooting</li>
      </ul>
      )}
    </div>
  );
}

export default CategorySelectBox;
