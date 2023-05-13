import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Main from './Main/Main';
import Write from './Write/Write';
import Manager from './Manager/Manager';
import Layout from './Layout/Layout';
import MyPage from './MyPage/MyPage';
import Tech from './Tech/Tech';
import Post from './Post/Post';
import UserList from './Manager/components/UserList';
import UserInfo from './Manager/components/UserInfo';
import PostSearch from './PostSearch/PostSearch';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />}>
          <Route path=":id" element={<Write />} />
        </Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/posts" element={<Tech />}>
          <Route path=":category" element={<Tech />} />
        </Route>
        <Route path="/post/:id" element={<Post />} />
        <Route path="/admin" element={<Manager />}>
          <Route path="/admin/role" element={<UserList />}>
            <Route path=":role" element={<UserList />} />
          </Route>
          <Route path="/admin/user" element={<UserInfo />}>
            <Route path=":id" element={<UserInfo />} />
          </Route>
        </Route>
        <Route path="/search" element={<PostSearch />} />
      </Route>
    </Routes>
  );
}

export default App;
