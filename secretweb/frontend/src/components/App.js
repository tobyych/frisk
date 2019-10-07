import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './messageboard/Dashboard';

import Alerts from './layout/Alerts';
import AlertTemplate from 'react-alert-template-basic';

import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';


import store from '../store';

// alert options
const alertOptions = {
  timeout: 3000,
  position: 'bottom center'
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))