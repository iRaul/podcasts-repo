import React, { useState, useEffect } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
  randomizePodcasts,
  orderPodcasts,
  fetchDataFromRssFeed,
  validateRssData,
} from './Utilities';

// Components
import Container from './Container';
import Headline from './Headline';
import PodcastList from './PodcastList';
import Footer from './Footer';
import Nav from './Nav';

// Data
import productivity from '../data/productivity';
import startup from '../data/startup';
import design from '../data/design';
import dev from '../data/dev';

import './Tabs.css';

const data = { productivity, startup, design, dev };

Object.keys(data).forEach(dataType => {
  data[dataType].map((v, index) => {
    v.type = dataType;
    v.sourceIndex = index;
    return v;
  });
});

const { all, order } = randomizePodcasts([
  ...data.design,
  ...data.dev,
  ...data.startup,
  ...data.productivity,
]);

async function getRssData(initialItem) {
  const { rss = '', rssOverride = [] } = initialItem;

  if (rss === '') {
    return initialItem;
  }

  const rssData = await fetchDataFromRssFeed(rss);

  if (rssData) {
    const validatedRssData = initialItem;
    [
      { rssKey: 'title', dataKey: 'title' },
      { rssKey: 'itunes.subtitle', rssFallbackKey: 'description', dataKey: 'description' },
      { rssKey: 'links', dataKey: 'url' },
      { rssKey: 'itunes.image', rssFallbackKey: 'image.url', dataKey: 'image' },
    ].forEach(property => {
      Object.assign(validatedRssData, validateRssData(rssData, rssOverride, property));
    });
    return validatedRssData;
  }
}

const App = () => {
  const [state, setState] = useState({
    all,
    design: data.design,
    dev: data.dev,
    startup: data.startup,
    productivity: data.productivity,
  });
  useEffect(() => {
    async function fetchRssData(dataList) {
      const promises = [];
      dataList.forEach((item, index) => {
        promises[index] = getRssData(dataList[index]);
      });
      const resolvedPromises = await Promise.all(promises);
      return resolvedPromises;
    }

    async function hydrateData() {
      const dataListsPromises = [];
      // [design, dev, startup, productivity].forEach((list, index) => {
      ['design', 'dev', 'startup', 'productivity'].forEach((dataType, index) => {
        dataListsPromises[index] = fetchRssData(data[dataType]);
      });
      const resolvedDataListsPromises = await Promise.all(dataListsPromises);

      setState({
        all: orderPodcasts([].concat(...resolvedDataListsPromises), order),
        design: resolvedDataListsPromises[0],
        dev: resolvedDataListsPromises[1],
        startup: resolvedDataListsPromises[2],
        productivity: resolvedDataListsPromises[3],
      });
    }
    hydrateData();
  }, []);

  return (
    <>
      <Nav />

      <Container>
        <Headline />

        <Tabs>
          <TabList>
            <Tab>All ({state.all.length})</Tab>
            <Tab>Design</Tab>
            <Tab>Dev</Tab>
            <Tab>Startup</Tab>
            <Tab>Productivity</Tab>
          </TabList>

          <TabPanel>
            <PodcastList items={state.all} />
          </TabPanel>

          <TabPanel>
            <PodcastList items={state.design} />
          </TabPanel>

          <TabPanel>
            <PodcastList items={state.dev} />
          </TabPanel>

          <TabPanel>
            <PodcastList items={state.startup} />
          </TabPanel>

          <TabPanel>
            <PodcastList items={state.productivity} />
          </TabPanel>
        </Tabs>

        <Footer />
      </Container>
    </>
  );
};

export default App;
