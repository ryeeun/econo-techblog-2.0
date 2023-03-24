/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginButton from './components/LoginButton';
import NavItem from './components/NavItem';
import Search from './components/Search';
import DropDown from './components/DropDown';
import logo from './img/tecono_logo.png';
import './Header.css';
import noImg from '../components/img/no_img.png';

function Header() {
  const ref = useRef();
  // eslint-disable-next-line no-unused-vars
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/');
  };

  const onClick = () => {
    setOpen(!isOpen);
  };

  const handleClickOutSide = (e) => {
    if (isOpen && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide);
    return () => {
      window.removeEventListener('click', handleClickOutSide);
    };
  });

  return (
    <header className="header">
      <button
        type="button"
        onClick={onLogoClick}
        className="header-logo__button"
      >
        <img className="header-logo" src={logo} alt="econovation logo" />
      </button>
      <ul className="header-nav-button-box">
        <NavItem navName="Home" link="/" />
        <NavItem navName="Tech" link="/posts/1" />
        <NavItem navName="Culture" link="/posts/2" />
        <NavItem navName="Trouble Shooting" link="/posts/3" />
      </ul>
      <div className="header-right-box">
        <Search />
        {isLogin ? (
          <button ref={ref} className="header-user" type="button" onClick={onClick}>
            <img className="header__user-img" src={noImg} alt="user img" />
            <span className="header__user-name">에코노베이션</span>님
            {isOpen && <DropDown />}
          </button>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
}

export default Header;
