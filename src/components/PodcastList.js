import React, { useState } from 'react';

import List from './List';
import Podcast from './Podcast';

import useFilter from '../hooks/useFilter';

const PodcastList = ({ items }) => {
  const [filter, setFilter] = useState('');
  const filteredItems = useFilter(items, filter);

  const handleFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <>
      <input value={filter} onChange={handleFilter} />
      <List>
        {filteredItems.map((item, index) => (
          <Podcast key={index} {...item} />
        ))}
      </List>
    </>
  );
};

export default PodcastList;
