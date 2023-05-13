/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import './css/TitleInput.css';

function TitleInput({ title, setTitle }) {
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="title-input-container">
      <input
        className="title-input"
        placeholder="제목을 입력하세요..."
        onChange={onTitleChange}
        value={title}
      />
    </div>
  );
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default TitleInput;
