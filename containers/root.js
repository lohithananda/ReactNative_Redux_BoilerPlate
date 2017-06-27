import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import MainApp from './MainApp'
const store = configureStore()  

export default class Root extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <MainApp/>
            </Provider>
        )
    }
}