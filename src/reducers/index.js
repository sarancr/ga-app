import { combineReducers } from 'redux';

import metricSnapShotReducer from './MetricSnapShotsReducer';

const rootReducer = combineReducers({
    metrics: metricSnapShotReducer
});

export default rootReducer;



