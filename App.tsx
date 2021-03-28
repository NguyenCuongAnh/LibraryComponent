import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Modal, FlatList} from 'react-native';
import Item_1 from './src/components/Item_1/Item_1';
import Item_2 from './src/components/Item_2/Item_2';
import {vScale, hScale} from './src/Scale';

interface States {
  visibleItem: boolean;
  indexItem: number;
}
interface Props {}
export default class App extends Component<Props, States> {
  state: States = {
    visibleItem: false,
    indexItem: 0,
  };
  openItem = (index: number) => {
    this.setState({visibleItem: true, indexItem: index});
  };

  renderItem = (index: number) => {
    switch (index) {
      case 0:
        return <Item_1 />;
      case 1:
        return <Item_2 />;
      default:
        return <Item_1 />;
    }
  };

  render() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <Text>Items</Text>
        <View>
          <FlatList
            style={{flex: 1}}
            data={['Item 1', 'Item 2']}
            renderItem={({index, item}) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#cdcdcd',
                    paddingHorizontal: 80,
                    paddingVertical: 20,
                    marginTop: 20,
                  }}
                  onPress={() => this.openItem(index)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item}
          />
        </View>

        <Modal visible={this.state.visibleItem}>
          {/* Item 1 */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            {this.renderItem(this.state.indexItem)}
            <Text
              style={{marginTop: 50}}
              onPress={() => {
                this.setState({visibleItem: false});
              }}>
              Close Modal
            </Text>
          </View>
          {/* Item 1 */}
        </Modal>
      </View>
    );
  }
}
