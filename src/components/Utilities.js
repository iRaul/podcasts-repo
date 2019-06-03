import Parser from 'rss-parser';
import has from 'lodash.has';
import get from 'lodash.get';

const parser = new Parser();

// Array Suffling
export const randomPodcast = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const lowerCase = str => str.toLowerCase();

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
export const fetchDataFromRssFeed = async rssUrl => parser.parseURL(CORS_PROXY + rssUrl);

export const validateRssData = (rssData, rssOverride, property) => {
  if (has(rssData, property.rssKey) && !rssOverride.includes(property.dataKey)) {
    return { [property.dataKey]: get(rssData, property.rssKey) };
  }
};
