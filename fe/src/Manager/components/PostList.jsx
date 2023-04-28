/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import '../css/PostList.css';

const postByUser = [
  {
    postId: 1,
    userName: '이윤성',
    title: '가나다라 에코노베이션',
    mainCategoryNumber: 2,
    createdDate: '2022.07.08',
    views: 21,
  },
  {
    postId: 2,
    userName: '이윤성',
    title: '가나다라 에코노베이션',
    mainCategoryNumber: 2,
    createdDate: '2022.07.08',
    views: 21,
  },
  {
    postId: 3,
    userName: '이윤성',
    title: '가나다라 에코노베이션',
    mainCategoryNumber: 2,
    createdDate: '2022.07.08',
    views: 21,
  },
];

const PostList = function ({ uid, onChange }) {
  const columns = ['게시판', '제목', '작성일', '조회', '설정'];
  const category = ['Tech', 'Culture', 'Trouble shooting'];
  const [currentPage, setCurrentPage] = useState(1);
  console.log(uid);
  return (
    <div className="postlist">
      <table className="postlist-table">
        <colgroup>
          <col width="12%" />
          <col width="40%" />
          <col width="20%" />
          <col width="20%" />
          <col width="8%" />
        </colgroup>
        <thead className="postlist-table__thead">
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {postByUser.map(
            ({ postId, mainCategoryNumber, title, createdDate, views }) => (
              <tr key={postId} className="postlist-table__tr">
                <td>{category[mainCategoryNumber - 1]}</td>
                <td>{title}</td>
                <td>{createdDate}</td>
                <td>{views}</td>
                <td>
                  <input
                    type="checkbox"
                    name="post"
                    value={postId}
                    className="postlist-table__checkbox"
                    onChange={(e) => onChange(e.target.checked, e.target.value)}
                  />
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
      {postByUser.length < 7 ? null : (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={6}
          totalItemsCount={postByUser.length}
          pageRangeDisplayed={5}
          prevPageText="<"
          nextPageText=">"
          onChange={setCurrentPage}
        />
      )}
    </div>
  );
};

PostList.propTypes = {
  uid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PostList;
