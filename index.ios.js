import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './app'

const store = configureStore()

const ReduxAPP = () =>(
  <provider store={store}>
    <App />
  </provider>
)
AppRegistry.registerComponent('React_Redux_API', () => ReduxAPP);
