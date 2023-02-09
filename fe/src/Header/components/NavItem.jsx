import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './NavItem.css';

function NavItem({ navName, link }) {
  let { pathname } = useLocation();
  const { category } = useParams();
  pathname = null;

  const [pageName, setPageName] = useState('');
  useEffect(() => {
    if (pathname === null) setPageName('Home');
    else if (pathname === 'posts') {
      switch (category) {
        case 1:
          setPageName('Tech');
          break;
        case 2:
          setPageName('Culture');
          break;
        case 3:
          setPageName('Trouble Shooting');
          break;
        default:
          setPageName('nothing');
      }
    } else setPageName('nothing');
  }, [pathname]);
  return (
    <Link to={link} className={pageName === navName ? 'nav-item--active' : 'nav-item'}>
      {navName}
    </Link>
  );
}

NavItem.propTypes = {
  navName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;
