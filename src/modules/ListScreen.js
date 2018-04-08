import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Style } from '../modules/styles/AddToDoStyle';

const GLOBAL_STRING = require('../constants/Strings')
export default class ListScreen extends Component {
    render() {
        return (
            <View style={Style.containerStyle}>
                <View style={Style.headerViewStyle}>
                    <Text>
                        {GLOBAL_STRING.ADD_TODO}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('enterName')
                    }}>
                        <Image
                            style={Style.logOutImageStyle}
                            source={require('../assets/dummy_image.png')} />
                    </TouchableOpacity>
                </View>
                
                <Text style={Style.todoLabel}>
                    {GLOBAL_STRING.TODO}
                </Text>
            </View>
        )
    }
}