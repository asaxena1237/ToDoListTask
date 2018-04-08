import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ListScreen from './ListScreen';
import AddTodo from './AddTodo';

const TabScreen = TabNavigator({

    ListScreen: {
        screen: ListScreen
    },
    AddTodo: {
        screen: AddTodo
    },
},
    {
        tabBarOptions:{
        labelStyle: {
            fontSize: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: (Platform.OS === 'ios') ? 15 : 0,
        },
    }
}
)
export default TabScreen;