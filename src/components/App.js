import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Container from './Container';
import Headline from './Headline';
import Podcast from './Podcast';
import List from './List';

import design from '../data/design';

import './Tabs.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Headline />

        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Design</Tab>
            <Tab>Web Dev</Tab>
            <Tab>Others</Tab>
          </TabList>

          <TabPanel>
            <List>
              <h1>All</h1>
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
            <h2>Any Content 3</h2>
          </TabPanel>

          <TabPanel>
            <h2>Any Content 4</h2>
          </TabPanel>
        </Tabs>

      </Container>
    );
  }
}

export default App;
