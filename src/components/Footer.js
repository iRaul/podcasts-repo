import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 40px;
`;

const Footer = () => (
  <Wrapper>
    All thumbnails © of their respective owners
  </Wrapper>
);

export default Footer;