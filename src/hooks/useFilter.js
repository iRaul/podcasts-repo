import { useEffect, useState } from 'react';
import { lowerCase } from '../components/Utilities';

export default ({ items }, filter) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const filterItem = item => lowerCase(item.title).includes(lowerCase(filter));
    setFilteredItems(items.filter(filterItem));
  }, [filter, items]);

  return filteredItems;
};
