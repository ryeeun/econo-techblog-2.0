import React from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';

import './LoginButton.css';

// http://auth.econovation.kr/

function LoginButton() {
  // const url = 'http://localhost:3000';
  // const location = useLocation();
  const onClick = () => {
    axios({
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER_BASE_URL,
      url: '/api/accounts/login?requestUrl=www.navaer.com}',
      headers: {
        'access-control-allow-origin': '*',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <button type="button" className="login-button" onClick={onClick}>
      <span>LOGIN</span>
    </button>
  );
}

export default LoginButton;
