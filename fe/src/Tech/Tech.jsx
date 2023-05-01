import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';

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
    categoryList: 'HTML, CSS, React, CSS, React',
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
                true
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
