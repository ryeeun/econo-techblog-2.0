/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './css/TitleInput.css';

function TitleInput({ setTitle }) {
  const titleInput = useRef();
  const titleBox = useRef();
  const onTitleChange = (e) => {
    setTitle(e.target.value);
    titleInput.current.style.height = '0.9vw';
    titleInput.current.style.height = `${titleInput.current.scrollHeight / 13}vw`;
    console.log(titleInput.current.scrollHeight);
  };
  return (
    <div ref={titleBox} className="title-input-container">
      <textarea ref={titleInput} className="title-input" placeholder="제목을 입력하세요..." rows={1} onChange={onTitleChange} />
    </div>
  );
}

TitleInput.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default TitleInput;
