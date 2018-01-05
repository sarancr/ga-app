import React, { Component } from 'react';
import MetricSnapShots from '../containers/MetricSnapShots'
import TabularView from '../containers/TabularView'
import DrillDownView from '../containers/DrillDownView'




class App extends Component {
  render() {
    return (
      <div>
        <MetricSnapShots />
        <TabularView />
        <DrillDownView />
        </div>
    );
  }
}

export default App;
