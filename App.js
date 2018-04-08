
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';
import Entername from './src/modules/Entername';
import AddTodo from './src/modules/AddTodo';
import TabScreen from './src/modules/TabScreen';

const AppNavigator = StackNavigator({
    enterName: {
        screen: Entername,
        navigationOptions: {
            header: null
        }
    },
    tabScreen: {
        screen: TabScreen,
        navigationOptions: {
            header: null
        }
    },
    addTodo: {
        screen: AddTodo,
        navigationOptions: {
            header: null
        }
    },
});

const store = configureStore();

export default function App() {

    return (
        <Provider store={store} >
            <AppNavigator />
        </Provider>
    );
}