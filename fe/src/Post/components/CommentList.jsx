import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../css/CommentList.css';

import Comment from './Comment';
import CommentWrite from './CommentWrite';

const result = [
  {
    id: 1,
    name: '김수민',
    content:
      '안녕하세요 궁금한점이 있습니다! 만약에 사용자가 빌린 차를 세차한 것이 아니라 구글링이나 다른 자동차를 세차한 이미지를 올린다면 이건 어떤 방식으로 걸러내는 건가요?',
  },
  {
    id: 2,
    name: '김수민',
    content:
      '안녕하세요 궁금한점이 있습니다! 만약에 사용자가 빌린 차를 세차한 것이 아니라 구글링이나 다른 자동차를 세차한 이미지를 올린다면 이건 어떤 방식으로 걸러내는 건가요?',
  },
  {
    id: 3,
    name: '김수민',
    content:
      '안녕하세요 궁금한점이 있습니다! 만약에 사용자가 빌린 차를 세차한 것이 아니라 구글링이나 다른 자동차를 세차한 이미지를 올린다면 이건 어떤 방식으로 걸러내는 건가요?',
  },
];

const CommentList = function () {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TECONO_API_URL}/boards/1/comments`)
      .then((response) => {
        console.log(response);
        setComments(response.data.data.comments);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);
  return (
    <div className="comment-list">
      <span className="comment-list__num">{`댓글 ${result.length}개`}</span>
      <CommentWrite />
      {comments.map((comment) => (
        <div>
          <Comment key={comment.id} name="김수민" content={comment.content} />
          {comment.reply.length > 0 && (
            <div className="comment-list-reply">
              {comment.reply.map((reply) => (
                <Comment
                  key={comment.id}
                  name="김수민"
                  content={reply.content}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
