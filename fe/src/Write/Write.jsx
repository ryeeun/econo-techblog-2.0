import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@toast-ui/editor/dist/toastui-editor.css';

import HashtagInput from './HashtagInput';
import TitleInput from './TitleInput';
import CategorySelectBox from './CategorySelectBox';
import './css/Write.css';
import './css/ToastUI.css';

function Write() {
  const { id } = useParams();
  const editorRef = useRef();
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const [categoryName, setCategoryName] = useState('');
  const [title, setTitle] = useState('');
  const [hashtagList, setHashtagList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (id != null) {
      axios
        .get(`${process.env.REACT_APP_TECONO_API_URL}/boards/1`)
        .then((response) => {
          console.log(response);
          setPost(response.data.data);
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
  }, []);

  useEffect(() => {
    if (post !== undefined) {
      setCategoryName(post.classificaion);
      setTitle(post.title);
      setHashtagList(post.hashtag.split(', '));
    }
  }, [post]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (categoryName === '') {
      setErrorMsg('게시판을 선택해주세요.');
      return;
    }
    if (title === '') {
      setErrorMsg('제목을 입력해주세요.');
      return;
    }
    if (hashtagList.length === 0) {
      setErrorMsg('태그를 한 개 이상 입력해주세요.');
      return;
    }

    const contentMarkdown = editorRef.current?.getInstance().getMarkdown();
    console.log(categoryName, title);
    console.log('contentMarkdown', contentMarkdown);

    // 새글 작성 or 수정인지 구분 후 요청
    if (id != null) {
      axios
        .put(
          `${process.env.REACT_APP_TECONO_API_URL}/boards/1`,
          {
            post_id: 1,
            title,
            classification: categoryName,
            content: contentMarkdown,
            hashtag: [hashtagList.join('')],
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TEST_ACCESS_TOKEN}`,
            },
          },
        )
        .then((response) => {
          console.log('수정 성공', response);
        })
        .catch((error) => {
          console.log('글 수정 오류', error);
        });
      navigate('/post/1');
    }
  };

  const onCancelClick = () => {
    navigate(-1);
  };

  // 로그인 로직 완료시 주석 해제
  // if (sessionStorage.getItem('uid') === null) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="write">
      <h3 className="write-title">게시판 글쓰기</h3>
      <div className="write__grid">
        <div className="write-item">
          게시판
          <span>*</span>
        </div>
        <div className="write-item__select">
          <CategorySelectBox
            categoryName={categoryName}
            setCategoryName={setCategoryName}
          />
        </div>
        <div className="write-item">
          제목
          <span>*</span>
        </div>
        <div className="write-item__input">
          <TitleInput title={title} setTitle={setTitle} />
        </div>
        <div className="write-item">
          태그
          <span>*</span>
        </div>
        <div className="write-item__input">
          <HashtagInput
            hashtagList={hashtagList}
            setHashtagList={setHashtagList}
          />
        </div>
        <div className="write-item">
          본문
          <span>*</span>
        </div>
        <div className="write-editor">
          <Editor
            ref={editorRef}
            initialValue={post !== undefined ? post.content : ''}
            placeholder="여기에 내용을 입력하세요.."
            previewStyle="vertical"
            height="100%"
            hooks={{
              addImageBlobHook: async (blob, callback) => {
                console.log(blob);
                // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
                // const imgUrl = await .... 서버 전송 / 경로 수신 코드 ...
                axios({
                  method: 'post',
                  url: '/api/file/',
                }).then((response) => {
                  console.log(response);
                  callback('http://localhost:3000/img/카레유.png', '카레유'); // image URL, text는 alt
                });
                // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
              },
            }}
          />
        </div>
      </div>
      <div className="write-button__container">
        <span className="write-error-msg">{errorMsg}</span>
        <button
          className="write-cancel__button"
          type="button"
          onClick={onCancelClick}
        >
          취소
        </button>
        <button
          className="write-submit__button"
          type="submit"
          onClick={onSubmit}
        >
          작성완료
        </button>
      </div>
    </div>
  );
}

export default Write;
