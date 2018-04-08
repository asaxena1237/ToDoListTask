import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Style } from '../modules/styles/AddToDoStyle';
import { connect } from 'react-redux';
import {onAddToDo} from './AddToDoAction';

const GLOBAL_STRING = require('../constants/Strings')
class AddTodo extends Component {
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
                <View style={Style.textInputViewStyle}>
                    <TextInput
                        multiline
                        placeholderTextColor='black'
                        placeholder={GLOBAL_STRING.ENTER_YOUR_ITEM} />
                    <Image
                        style={Style.crossIconStyle}
                        source={require('../assets/dummy_image.png')} />
                </View>

                <TouchableOpacity style={Style.buttonStyle} onPress={()=>{
                    {this.props.onAddToDo}
                }}>
                    <Text>
                        {GLOBAL_STRING.ADD_ITEM}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const mapStateToProps = (addToDoReducer) => {
    const { task } = addToDoReducer;
    return { task }

}
export default connect(mapStateToProps,{onAddToDo})(AddTodo);