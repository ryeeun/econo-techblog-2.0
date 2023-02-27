import React from 'react';
import { useLocation } from 'react-router-dom';

import './css/PostSearch.css';
import TagSearch from './components/TagSearch';
import SearchResult from './components/SearchResult';

const PostSearch = function () {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="post-search">
      <div className="post-search-top">
        <TagSearch />
      </div>
      <SearchResult keyword={state.value} />
    </div>
  );
};

export default PostSearch;
