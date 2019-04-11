import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { randomPodcast } from './Utilities';

import Container from './Container';
import Headline from './Headline';
import PodcastList from './PodcastList';
import Footer from './Footer';
import Nav from './Nav';

import startup from '../data/startup';
import design from '../data/design';
import dev from '../data/dev';

import './Tabs.css';

const all = [...design, ...dev, ...startup];

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
              <Tab>Web Dev</Tab>
              <Tab>Startup</Tab>
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
          </Tabs>

          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
