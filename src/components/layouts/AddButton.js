import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export class AddButton extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Icon name="plus" size={30} color="#fff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#e74c3c',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -30,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#e74c3c',
    shadowRadius: 50,
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 10},
    elevation: 5,
  },
});

export default AddButton;
