import { useEffect, useState } from 'react';
import { lowerCase } from '../components/Utilities';

export default (items, filter) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItem = item => lowerCase(item.title).includes(lowerCase(filter));

  useEffect(() => {
    setFilteredItems(items.filter(filterItem));
  });

  return filteredItems;
};
