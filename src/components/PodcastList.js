import React, { useState, useEffect } from 'react';

import Input from './Input';
import List from './List';
import Podcast from './Podcast';

import useFilter from '../hooks/useFilter';

const PodcastList = items => {
  const [itemsState, setItemsState] = useState(items);
  const [filter, setFilter] = useState('');
  const filteredItems = useFilter(itemsState, filter);

  useEffect(() => {
    setItemsState(items);
  }, [items]);

  const handleFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <>
      <Input value={filter} onChange={handleFilter} placeholder="Search for Podcasts" />
      <List>
        {filteredItems.map((item, index) => (
          <Podcast key={index} {...item} />
        ))}
      </List>
    </>
  );
};

export default PodcastList;
