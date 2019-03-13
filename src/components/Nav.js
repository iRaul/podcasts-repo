import React from 'react';
import styled from 'styled-components';

import logo from '../static/logo-3.svg';

const Navbar = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 8px;
  background: #fff;
  padding: 15px 0;
  width: 100%;
  margin: 0 auto 30px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 992px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }

  img {
    width: 50px;
    height: 50px;
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    transition: color 0.3s ease;

    &:hover {
      color: #4facfe;
    }
  }

  @media (max-width: 992px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const Nav = () => (
  <Navbar>
    <div>
      <img src={logo} alt="Logo" />

      <a href="https://github.com/iRaul/podcasts-repo" target="_blank" rel="noopener noreferrer">
        Contribute
      </a>
    </div>
  </Navbar>
);

export default Nav;
