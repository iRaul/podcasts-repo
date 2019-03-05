import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 6px;
  color: rgba(0, 0, 0, 1);
  position: relative;

  @media (max-width: 992px) {
    font-size: 45px;
  }
`;

const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 992px) {
    font-size: 24px;
  }
`;

const Headline = () => (
  <Wrapper>
    <Title>Podcasts Repo</Title>
    <SubTitle>A collection of podcasts around the web.</SubTitle>
  </Wrapper>
);

export default Headline;
