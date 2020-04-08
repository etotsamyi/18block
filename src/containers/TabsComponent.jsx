/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../assets/styles/App.css';
import { Tabs } from 'antd';
import Timer from '../components/Timer';
import CountdownContainer from './CountdownContainer';

export default class TabsComponent extends React.Component {
  render() {
    const { TabPane } = Tabs;

    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Timer" key="1">
          <Timer />
        </TabPane>
        <TabPane tab="Countdown" key="2">
          <CountdownContainer />
        </TabPane>
      </Tabs>
    );
  }
}
