import React, { Component } from 'react';
import { TextInput, Image, View, Text, TouchableOpacity , AsyncStorage} from 'react-native';
import { Style } from './styles/EnterNameStyle'

const GLOBAL_STRING = require('../constants/Strings')
export default class Entername extends Component {
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
                    <TouchableOpacity onPress={()=>{
                        
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
