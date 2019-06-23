import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  }

  &:after {
    content: '';
    display: table;
    clear: both;
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
  float: left;
  margin-right: 10px;
`;

const Info = styled.div`
  padding-top: 4px;

  h3 {
    margin-top: 0;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 1);
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 14px;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    hyphens: auto;
  }
`;

const Podcast = props => {
  const [propState, setPropState] = useState(props);
  useEffect(() => {
    setPropState(props);
  }, [props]);

  return (
    <Card href={propState.url} target="_blank" rel="noopener noreferrer" title={propState.title}>
      <Image image={propState.image} />

      <Info>
        <h3>{propState.title}</h3>
        <p>{propState.description || 'loading...'}</p>
      </Info>
    </Card>
  );
};

export default Podcast;
