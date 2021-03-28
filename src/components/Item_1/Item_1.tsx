import React, {Component} from 'react';
import {View, Text, StyleSheet, ViewStyle, Image} from 'react-native';
import {hScale, vScale} from '../../Scale';

interface Props {
  containerStyle?: ViewStyle;
}

interface States {}

export default class Item_1 extends Component<Props, States> {
  render() {
    const {containerStyle} = this.props;
    return (
      <View>
        {/* firts view */}
        <View style={[styles.container, containerStyle]}>
            {/* view left */}
          <View style={styles.view_1}>
            <Image
                style={{
                    width: hScale(60), 
                    height: hScale(60),
                    borderRadius: hScale(60)
                }}

                resizeMode="contain"
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </View>
          {/* view center */}
          <View style={styles.view_2}></View>
          {/* view right */}
          <View style={styles.view_3}></View>
        </View>

        {/* second view */}
        <View style={styles.secondView}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cdcdcd',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: vScale(5)
  },
  secondView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view_1: {
    flex: 2,
  },
  view_2: {
    flex: 6,
  },
  view_3: {
    flex: 2,
  },
});
