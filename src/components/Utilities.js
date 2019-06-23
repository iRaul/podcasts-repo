import Parser from 'rss-parser';
import has from 'lodash.has';
import get from 'lodash.get';
import shuffle from 'lodash.shuffle';

const parser = new Parser({
  customFields: { feed: [['link', 'links', { keepArray: true }]] },
});

function getShuffledOrder(arr) {
  return shuffle(
    Array(arr.length)
      .fill()
      .map((v, i) => i)
  );
}

export const orderPodcasts = (podcasts, newPosition) =>
  Array(podcasts.length)
    .fill()
    .map((v, i) => podcasts[newPosition[i]]);

// Array Shuffling
export const randomizePodcasts = podcasts => {
  const order = getShuffledOrder(podcasts);
  return { all: orderPodcasts(podcasts, order), order };
};

export const lowerCase = str => str.toLowerCase();

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
export const fetchDataFromRssFeed = async rssUrl => parser.parseURL(CORS_PROXY + rssUrl);

export const validateRssData = (rssData, rssOverride, property) => {
  const { rssKey } = property;
  const { rssFallbackKey = rssKey } = property;
  const { dataKey } = property;

  if ((has(rssData, rssKey) || has(rssData, rssFallbackKey)) && !rssOverride.includes(dataKey)) {
    let value = get(rssData, rssKey, '');
    if (value === '') {
      value = get(rssData, rssFallbackKey, '');
    }
    if (Array.isArray(value)) {
      [value] = value.filter(entry => typeof entry === 'string');
    }
    return { [property.dataKey]: value };
  }
};
