import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const Card = styled.a`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s ease-out 0s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: 10px;

  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f6f7f8;
  height: 100px;
  width: 100px;
  border-radius: 8px;
`;

const Info = styled.div`
  padding-top: 4px;

  h3 {
    margin-top: 0;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 1);
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    hyphens: auto;
  }
`;

// eslint-disable-next-line react/prop-types
const Podcast = ({ url, image, title, description }) => (
  <Card href={url} target="_blank" rel="noopener noreferrer">
    <LazyLoad height={100} once>
      <Image image={image} />
    </LazyLoad>
    <Info>
      <h3>{title}</h3>
      <p>{description}</p>
    </Info>
  </Card>
);

export default Podcast;
