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
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DrillDownView from './containers/DrillDownView';
import Header from './components/Header';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <div>
        <Header></Header>  
        <Provider store={createStoreWithMiddleware(reducers)}>
            <IntlProvider locale="en">
                <BrowserRouter> 
                    <Switch>
                        <Route exact path='/' component={App}/>
                        <Route path='/drilldown/:field' component={DrillDownView}/>
                    </Switch>
                </BrowserRouter>
            </IntlProvider>
        </Provider>
    </div>
    , document.getElementById("root")
);
registerServiceWorker();

