/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import '../css/PostDesc.css';
import test from './test.txt';

const PostDesc = function () {
  const [content, setContent] = useState('');
  useEffect(() => {
    fetch(test).then((r) => r.text()).then((text) => {
      console.log(text);
      setContent(text);
    });
  }, []);
  if (content === '') return null;
  return (
    <div className="post-desc">
      <Viewer initialValue={content} />
    </div>
  );
};

export default PostDesc;
