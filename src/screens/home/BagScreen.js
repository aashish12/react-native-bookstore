import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Header from '../../components/layouts/Header';

export class BagScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <Header />
        <View>
          <Text>Hello this is Bag Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default BagScreen;
