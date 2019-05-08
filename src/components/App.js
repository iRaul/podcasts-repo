import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { randomPodcast } from './Utilities';

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

const all = [...design, ...dev, ...startup, ...productivity];

randomPodcast(all);

class App extends Component {
  render() {
    return (
      <>
        <Nav />

        <Container>
          <Headline />

          <Tabs>
            <TabList>
              <Tab>All ({all.length})</Tab>
              <Tab>Design</Tab>
              <Tab>Dev</Tab>
              <Tab>Startup</Tab>
              <Tab>Productivity</Tab>
            </TabList>

            <TabPanel>
              <PodcastList items={all} />
            </TabPanel>

            <TabPanel>
              <PodcastList items={design} />
            </TabPanel>

            <TabPanel>
              <PodcastList items={dev} />
            </TabPanel>

            <TabPanel>
              <PodcastList items={startup} />
            </TabPanel>

            <TabPanel>
              <PodcastList items={productivity} />
            </TabPanel>
          </Tabs>

          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
