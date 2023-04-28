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

const data = [
  {
    postId: '1',
    userName: '에코노베이션',
    content: 'React를 조금만이라도 공부해본 사람이 위 코드를 보게 되면 틀림없이 잘못된 코드라고 말할겁니다. 그 사람에게 저 코드가 왜 잘못됐냐고 물어보면 뭐라고 대답할까요? 장담은 못하겠지만 아마 많은 사람들이 "React에서 그렇게 쓰지 말래" 라고 말할것 같습니다.같은 사람에게 "왜 React에서 저렇게 쓰지 말래?" 라고 물어보면 이번에도 장담은 못하겠지만 아마도 "오... 그거까지는 모르겠는데...?" 라고 대답할것 같습니다. 저도 최근에 같은 질문을 받은 후 마찬가지의 대답을 했고 그것이 이번 포스팅을 하게 된 이유입니다. 혹시라도 이 글을 보고 계신 여러분께 다시 한번 물어보겠습니다. "왜 React에서 저렇게 쓰지 말래요?" 이 질문에 대한 대답을 할 수 있는 분은 이글을 보지 않으셔도 좋습니다.',
    title: 'React hook은 왜 컴포넌트 최상단에서만 동작할까?',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React, CSS, React',
    createdDate: '2023/01/01 00:00:00',
    views: '21',
    hearts: '21',
  },
  {
    postId: '2',
    userName: '에코노베이션',
    content: 'dddd',
    title: '에코노베이션 멋알',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React',
    createdDate: '2023/01/01 00:00:00',
    views: '21',
    hearts: '21',
  },
  {
    postId: '3',
    userName: '에코노베이션',
    content: 'dddd',
    title: '에코노베이션 멋알 팀에서 에코노베이션 테크블로그를 제작하였습니다.에코노베이션 멋알 팀에서 에코노베이션 테크블로그를 제작하였습니다.',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React',
    createdDate: '2023/01/01 00:00:00',
    views: '21',
    hearts: '21',
  },
  {
    postId: '4',
    userName: '에코노베이션',
    content: 'dddd',
    title: '에코노베이션 멋알 팀에서 에코노베이션 테크블로그를 제작하였습니다.',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React',
    createdDate: '2023/01/01 00:00:00',
    views: '21',
    hearts: '21',
  },
];

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
