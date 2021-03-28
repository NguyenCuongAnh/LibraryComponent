import React, {Component} from 'react';
import {View, Text, StyleSheet, ViewStyle, Image} from 'react-native';
import {hScale, vScale} from '../../Scale';

interface Props {
  containerStyle?: ViewStyle;
}

interface States {

}

export default class Item_2 extends Component<Props, States>{
    render(){
        return(
            <View>
                <Text>
                    Item 2
                </Text>
            </View>
        )
    }
}