import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

import searchButton from '../img/search_button.png';
import './Search.css';

function Search() {
  const [isSearchBarOn, setIsSearchBarOn] = useState(false);
  const onClick = () => {
    setIsSearchBarOn(() => !isSearchBarOn);
  };

  return (
    <div className={['search', isSearchBarOn && 'search--active'].join(' ')}>
      {isSearchBarOn && (
        <input
          className="search-input"
        />
      )}
      <buton className="search-button" type="button" onClick={onClick}>
        <img
          className="search-button-img"
          alt="search-button"
          src={searchButton}
        />
      </buton>
    </div>
  );
}

export default Search;
