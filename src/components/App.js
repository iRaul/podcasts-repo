import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import randomPodcast from './Utilities';

import Container from './Container';
import Headline from './Headline';
import Podcast from './Podcast';
import Footer from './Footer';
import List from './List';
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
            <Tab>All ({ all.length })</Tab>
            <Tab>Design</Tab>
            <Tab>Web Dev</Tab>
            <Tab>Startup</Tab>
          </TabList>

          <TabPanel>
            <List>
              {
                all.map((item, index) => (
                  <Podcast
                    key={ index }
                    image={ item.image }
                    title={ item.title }
                    description={ item.description }
                    website={ item.website }
                  />
                ))
              }
            </List>
          </TabPanel>

          <TabPanel>
            <List>
              {
                design.map((item, index) => (
                  <Podcast
                    key={ index }
                    image={ item.image }
                    title={ item.title }
                    description={ item.description }
                  />
                ))
              }
            </List>
          </TabPanel>

          <TabPanel>
            <List>
              {
                dev.map((item, index) => (
                  <Podcast
                    key={ index }
                    image={ item.image }
                    title={ item.title }
                    description={ item.description }
                  />
                ))
              }
            </List>
          </TabPanel>

          <TabPanel>
            <List>
              {
                startup.map((item, index) => (
                  <Podcast
                    key={ index }
                    image={ item.image }
                    title={ item.title }
                    description={ item.description }
                  />
                ))
              }
            </List>
          </TabPanel>
        </Tabs>

        <Footer />
      </Container>
    </>
    )
  }
}

export default App;
