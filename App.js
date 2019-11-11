import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import HomeScreen from './src/screens/home/HomeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/home/SearchScreen';
import AddScreen from './src/screens/home/AddScreen';
import BagScreen from './src/screens/home/BagScreen';
import ProfileScreen from './src/screens/home/ProfileScreen';
import AddButton from './src/components/layouts/AddButton';

const AppContainer = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={24} color="#888" />
        ),
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="search1" size={24} color="#888" />
        ),
      },
    },
    Add: {
      screen: AddScreen,
      navigationOptions: {
        tabBarIcon: <AddButton />,
      },
    },
    Bag: {
      screen: BagScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="book" size={24} color="#888" />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" size={24} color="#888" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export default createAppContainer(AppContainer);
