import React from 'react';
import MetricSnapShots from '../containers/MetricSnapShots';
import TabularView from '../containers/TabularView';

const Home = ()=>{
    return (
        <div className="content">
            <div className="page-title">Dashboard</div>
            <MetricSnapShots />
            <TabularView />
        </div>
    );
}

export default Home;