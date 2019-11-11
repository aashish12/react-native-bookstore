import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View>
          <Icon name="menuunfold" size={24} color="#888" />
        </View>
        <View
          style={{
            backgroundColor: '#eee',
            marginVertical: 7,
            width: '70%',
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <TextInput placeholder="Search" style={{flex: 1}} />
          <Icon name="search1" size={24} color="#888" />
        </View>
        <View>
          <Icon name="qrcode" size={24} color="#888" />
        </View>
        <View>
          <Icon name="bells" size={24} color="#888" />
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: '#2ecc71',
              borderRadius: 5,
              position: 'absolute',
              top: 0,
              right: 0,
              shadowColor: '#000',
              shadowOpacity: {width: 0, height: 10},
              shadowOpacity: 1,
              elevation: 5,
            }}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    shadowColor: '#222',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    elevation: 5,
    shadowOpacity: 0.4,
  },
});

export default Header;
