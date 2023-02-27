import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';

import { useLoginStateContext } from '../Context/LoginContext';
import './css/Tech.css';
import '../components/css/Pagination.css';
import write from './img/write.png';
import Banner from './components/Banner';
import Official from './components/Official';
import PostBox from '../components/PostBox';
import Footer from '../Footer/Footer';

const data = [
  {
    postId: '1',
    userName: '에코노베이션',
    content: '에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션에코노베이션',
    title: '에코노베이션',
    mainCategoryNumber: '3',
    categoryList: 'HTML, CSS, React',
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
    title: '에코노베이션 멋알 팀에서 에코노베이션 테크블로그를 제작하였습니다.',
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

const Tech = function () {
  // const { category } = useParams();
  const loginContext = useLoginStateContext();
  // const [currentPosts, setCurrentPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/write');
  };
  useEffect(() => {
    // 페이지 바뀌면 스크롤 맨위로 이동
    window.scrollTo(0, 0);
  }, [currentPage]);
  return (
    <div className="tech">
      <Banner />
      <div className="tech__posts">
        <div className="tech-official">
          <div className="tech-official-top">
            <p className="tech__title">Official</p>
            <button
              type="button"
              className={
                loginContext.id === 1
                  ? 'tech-write_button tech-write_button--hidden'
                  : 'tech-write_button'
              }
              onClick={onClick}
            >
              <img src={write} alt="write" className="tech-write__img" />
              <span>글쓰기</span>
            </button>
          </div>
          <Official />
        </div>
        <div className="tech-recent">
          <p className="tech__title">Recent posts</p>
          {data.map((item) => (
            <PostBox key={item.postId} post={item} />
          ))}
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={7}
            totalItemsCount={data ? data.length : 0}
            pageRangeDisplayed={5}
            prevPageText="<"
            nextPageText=">"
            onChange={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tech;
