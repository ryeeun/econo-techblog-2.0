import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import search from '../img/search.png';
import '../css/TagSearch.css';

const TagSearch = function () {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const onChange = (e) => {
    setText(() => e.target.value);
  };
  const onSubmit = () => {
    navigate('/search', { state: { value: text } });
  };
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };
  return (
    <div className="tag-search">
      <input className="tag-search__input" onChange={onChange} value={text} onKeyDown={handleOnKeyPress} />
      <button className="tag-search-btn" type="submit" onClick={onSubmit}>
        <img src={search} alt="search" className="tag-search__img" />
      </button>
    </div>
  );
};

export default TagSearch;
