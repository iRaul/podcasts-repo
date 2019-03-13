import React from 'react';
import styled from 'styled-components';

import up from '../static/icons/chevron-up.svg';

const Button = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  opacity: 0;
  visibility: hidden;
  color: rgb(255, 255, 255);
  cursor: pointer;
  z-index: 9999;
  border-radius: 50%;
  border: none;
  transition: all 0.2s ease-in-out 0s;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);

  &.isVisible {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
    transform: translateY(-3px);
    transition: all 0.2s ease-in-out 0s;
  }

  &:active,
  &:focus {
    box-shadow: #fff 0px 0px 0px 1px, #4facfe 0px 0px 0px 3px;
    transform: translateY(-2px);
    outline: none;
    transition: all 0.2s ease-in-out 0s;
  }
`;

const ScrollTop = props => (
  <Button onClick={props.scrollToTop} type="button">
    <img src={up} alt="Icon" />
  </Button>
);

export default ScrollTop;
