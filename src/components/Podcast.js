import React from 'react';
import styled from 'styled-components';

import website from '../static/icons/link-solid.svg';
import spotify from '../static/icons/spotify-brands.svg';
import podcast from '../static/icons/podcast-solid.svg';

const Card = styled.div`
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s ease-out 0s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;

    .resources {
      transform: translateY(50px);
    }
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Resources = styled.div`
  position: absolute;
  width: 80%;
  height: 58px;
  background: rgba(79, 172, 254, 0.96);
  /* background: rgba(0, 0, 0, 0.9); */
  left: 0; right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transform: translateY(116px);
  transition: transform .3s ease;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 0 10px;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 20px;
    }
  }
`;

const Image = styled.div`
  background-image: url(${ props => props.image });
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  border-radius: 8px;
  float: left;
  margin-right: 10px;
`;

const Info = styled.div`
  padding-top: 4px;

  h3 {
    margin-top: 0;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 1);
  }

  p {
    font-size: 14px;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Podcast = props => (
  <Card>
    <Resources className='resources'>
      <a
        href={ props.website }
        target='_blank'
        rel="noopener noreferrer">
        <img src={ website } alt='Link Icon' />
      </a>

      <a
        href={ props.spotify }
        target='_blank'
        rel="noopener noreferrer">
        <img src={ spotify } alt='Spotify Icon' />
      </a>

      <a
        href={ props.podcast }
        target='_blank'
        rel="noopener noreferrer">
        <img src={ podcast } alt='Apple Podcast Icon' />
      </a>
    </Resources>

    <Image image={ props.image } />

    <Info>
      <h3>{ props.title }</h3>
      <p>{ props.description }</p>
    </Info>
  </Card>
);

export default Podcast;