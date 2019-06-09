import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { fetchDataFromRssFeed, validateRssData } from './Utilities';

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
  }

  p {
    font-size: 14px;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    hyphens: auto;
  }
`;

class Podcast extends React.Component {
  constructor(props) {
    super(props);
    const { title = '', image = '', description = '', url = '' } = props;
    this.state = { title, image, description, url };
  }

  componentDidMount = async () => {
    const { rss = '' } = this.props;
    if (rss) {
      await this.getRssData(rss);
    }
  };

  getRssData = async rssUrl => {
    const rssData = await fetchDataFromRssFeed(rssUrl);
    if (rssData) {
      const { rssOverride = [] } = this.props;
      [
        { rssKey: 'title', dataKey: 'title' },
        { rssKey: 'description', dataKey: 'description' },
        { rssKey: 'links', dataKey: 'url' },
        { rssKey: 'image.url', dataKey: 'image' },
      ].forEach(property => {
        const validatedRssData = validateRssData(rssData, rssOverride, property);
        if (validatedRssData) {
          this.setState(validatedRssData);
        }
      });
    }
  };

  render = () => {
    const { title, url, image, description } = this.state;
    return (
      <Card href={url} target="_blank" rel="noopener noreferrer">
        <Image image={image} />

        <Info>
          <h3>{title}</h3>
          <p>{description}</p>
        </Info>
      </Card>
    );
  };
}

Podcast.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string,
  url: propTypes.string,
  description: propTypes.string,
  rss: propTypes.string,
  rssOverride: propTypes.array,
};

export default Podcast;
