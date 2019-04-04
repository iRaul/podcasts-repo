import React from 'react';

import List from './List';
import Podcast from './Podcast';

const PodcastList = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <Podcast key={index} {...item} />
    ))}
  </List>
);

export default PodcastList;
