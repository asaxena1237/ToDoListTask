import React, { Component } from 'react';
import { Text, View ,Image} from 'react-native';
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
                    <Image
                        style={Style.logOutImageStyle}
                        source={require('../assets/dummy_image.png')} />
                </View>
            </View>
        )
    }
}