import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Style } from '../modules/styles/AddToDoStyle';
import { connect } from 'react-redux';
import { onAddToDo, clearText } from './AddToDoAction';

const GLOBAL_STRING = require('../constants/Strings')
class AddTodo extends Component {
    render() {
        return (
            <View style={Style.containerStyle}>
                <View style={Style.headerViewStyle}>
                    <Text>
                        {GLOBAL_STRING.ADD_TODO}
                    </Text>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('enterName')
                    }}>
                        <Image
                            style={Style.logOutImageStyle}
                            source={require('../assets/dummy_image.png')} />
                    </TouchableOpacity>
                </View>
                <View style={Style.textInputViewStyle}>
                    <TextInput
                        multiline
                        placeholderTextColor='black'
                        onChangeText={this._enterTodo.bind(this)}
                        placeholder={GLOBAL_STRING.ENTER_YOUR_ITEM} />
                    <TouchableOpacity onPress={() => {
                        this.props.clearText
                    }}>
                        <Image
                            style={Style.crossIconStyle}
                            source={require('../assets/dummy_image.png')} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={Style.buttonStyle}>
                    <Text>
                        {GLOBAL_STRING.ADD_ITEM}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
    _enterTodo = (text) => {
        this.props.onAddToDo(text)
    }
}

const mapStateToProps = (addToDoReducer) => {
    const { task } = addToDoReducer;
    return { task }

}
export default connect(mapStateToProps, { onAddToDo, clearText })(AddTodo);