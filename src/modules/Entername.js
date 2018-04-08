import React, { Component } from 'react';
import { TextInput, Image, View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Style } from './styles/EnterNameStyle';
import { connect } from 'react-redux';
import { enterName } from '../modules/EnterNameAction';
import { NavigationActions } from 'react-navigation';

const GLOBAL_STRING = require('../constants/Strings')
class Entername extends Component {
    render() {
        return (
            <View style={Style.containerView}>
                <Text style={Style.headerText}>
                    {GLOBAL_STRING.TO_DO}
                </Text>
                <View style={Style.textInputView}>
                    <TextInput
                        placeholder={GLOBAL_STRING.YOUR_NAME}
                        placeholderTextColor='#FF5733'
                    />
                    <TouchableOpacity onPress={() => {
                        {this.props.enterName}
                        this.props.navigation.navigate ('tabScreen')
                    }}>
                        <Image
                            style={Style.imageStyle}
                            source={require('../assets/dummy_image.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const mapStateToProps = ({ enterNameReducer }) => {
    const { name } = enterNameReducer;
    return { name };
}
export default connect(mapStateToProps, { enterName })(Entername);
