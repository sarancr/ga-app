import React, { Component } from 'react';
import MetricSnapShots from '../containers/MetricSnapShots'
import TabularView from '../containers/TabularView'
import DrillDownView from '../containers/DrillDownView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <MetricSnapShots />
        <TabularView />
        <DrillDownView />
        </div>
    );
  }
}

export default App;
