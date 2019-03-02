import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s ease-out 0s;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
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
    <Image image={ props.image } />

    <Info>
      <h3>{ props.title }</h3>
      <p>{ props.description }</p>
    </Info>
  </Card>
);

export default Podcast;