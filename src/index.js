import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/App';
import "es6-promise/auto";
import ReduxPromise from 'redux-promise';
import { IntlProvider } from 'react-intl'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <IntlProvider locale="en">
            <App />
        </IntlProvider>
    </Provider>
    , document.getElementById("root")
);
registerServiceWorker();

