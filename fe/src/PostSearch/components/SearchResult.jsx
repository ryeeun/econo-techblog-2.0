/* eslint-disable object-shorthand */
import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import '../css/SearchResult.css';
import '../../components/css/Pagination.css';
import SearchNavItem from './SearchNavItem';
import PostBox from '../../components/PostBox';

const SearchResult = function ({ keyword }) {
  // const { currentKeyword } = useParams();
  const [navArr, setArr] = useState([
    {
      id: 0,
      name: '전체',
      active: true,
    },
    {
      id: 1,
      name: 'Tech',
      active: false,
    },
    {
      id: 2,
      name: 'Culture',
      active: false,
    },
    {
      id: 3,
      name: 'Trouble Shooting',
      active: false,
    },
  ]);
  const [currCategory, setCurrCategory] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (data) {
      setCurrentPosts(data.search);
    }
  }, [data]);
  const onClick = (id) => {
    setArr(
      navArr.map((item) => {
        const elem = item;
        if (elem.id === id) {
          elem.active = true;
        } else {
          elem.active = false;
        }
        return elem;
      }),
    );
    setCurrCategory(id);
    console.log(currCategory);
  };
  const postNum = [5, 3, 0, 2]; // 검색 결과
  return (
    <div className="search-result">
      <div className="search-result__text">
        <span className="search-result__keyword">{keyword}</span>
        <span className="search-result__num">검색결과 (총 6건)</span>
      </div>
      <div className="search-result__nav">
        {navArr.map((elem) => (
          <SearchNavItem
            key={elem.id}
            id={elem.id}
            name={elem.name}
            num={postNum[elem.id]}
            active={elem.active}
            onClick={onClick}
          />
        ))}
      </div>
      <div>
        {currentPosts.map((item) => (
          <PostBox key={item.postId} post={item} />
        ))}
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={5}
          totalItemsCount={currentPosts.length}
          pageRangeDisplayed={3}
          prevPageText="<"
          nextPageText=">"
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default SearchResult;
