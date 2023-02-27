/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';

import searchButton from '../img/search_button.png';
import './Search.css';

function Search() {
  const ref = useRef();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const [isSearchBarOn, setIsSearchBarOn] = useState(false);
  const onChange = (e) => {
    setText(() => e.target.value);
  };

  const onSubmit = () => {
    setText('');
    setIsSearchBarOn(false);
    navigate('/search', { state: { value: text } });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onClick = () => {
    if (text !== '' && isSearchBarOn) onSubmit();
    setIsSearchBarOn(() => !isSearchBarOn);
  };

  const handleClickOutSide = (e) => {
    if (isSearchBarOn && !ref.current.contains(e.target)) {
      setIsSearchBarOn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide);
    return () => {
      window.removeEventListener('click', handleClickOutSide);
    };
  });

  return (
    <div ref={ref} className={['search', isSearchBarOn && 'search--active'].join(' ')}>
      {isSearchBarOn && (
        <input
          className="search-input"
          onChange={onChange}
          value={text}
          onKeyDown={handleOnKeyPress}
          autoFocus
        />
      )}
      <button className="search-button" type="submit" onClick={onClick}>
        <img
          className="search-button-img"
          alt="search-button"
          src={searchButton}
        />
      </button>
    </div>
  );
}

export default Search;
