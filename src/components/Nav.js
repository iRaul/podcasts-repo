import React from 'react';
import styled from 'styled-components';

import logo from '../static/logo-3.svg';

const Navbar = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    transition: color .3s ease;

    &:hover {
      color: #4FACFE;
    }
  }
`;

const Nav = () => (
  <Navbar>
    <img
      width='50'
      height='50'
      src={ logo }
      alt='Logo' />

    <a
      href='https://github.com/iRaul/podcasts-repo'
      target='_blank'
      rel='noopener noreferrer'>
      Contribute
    </a>
  </Navbar>

);

export default Nav;