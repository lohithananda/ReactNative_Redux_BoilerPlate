import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Root from './containers/root';

AppRegistry.registerComponent('React_Redux_API', () => Root);