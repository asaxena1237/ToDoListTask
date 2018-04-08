
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
// import configureStore from "./store/configureStore";
import Entername from './src/modules/Entername';
import AddTodo from './src/modules/AddTodo';
import TabScreen from './src/modules/TabScreen';

const AppNavigator = StackNavigator({
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
    enterName: {
        screen: Entername,
        navigationOptions: {
            header: null
        }
    },

});

// const store = configureStore();

export default function App() {

    return (
        // <Provider store={store} >
        <AppNavigator />
        // </Provider>
    );
}