import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Header from '../../components/layouts/Header';
import Icon from 'react-native-vector-icons/AntDesign';

export class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <Header />
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <View style={styles.profileHeaderText}>
              <Text style={styles.headerText}>Purchased</Text>
              <Text style={{fontSize: 26, color: '#fff', fontWeight: 'bold'}}>
                10
              </Text>
            </View>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                source={require('./../../assets/img/userprofile.jpeg')}
              />
            </View>
            <View style={styles.profileHeaderText}>
              <Text style={styles.headerText}>Purchased</Text>
              <Text style={{fontSize: 26, color: '#fff', fontWeight: 'bold'}}>
                12
              </Text>
            </View>
          </View>
          <View style={styles.profileName}>
            <Text style={{color: '#fff'}}>ID: 456789</Text>
            <Text style={styles.profile}>Sumit Ghising</Text>
          </View>

          <View style={styles.profileStatSection}>
            <View style={styles.statTab}>
              <Icon name="book" size={26} color="#fff" />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Books</Text>
            </View>
            <View style={styles.statTab}>
              <Icon name="pay-circle-o1" size={26} color="#fff" />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Earning</Text>
            </View>
            <View style={styles.statTab}>
              <Icon name="hearto" size={26} color="#fff" />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Likes</Text>
            </View>
            <View style={styles.statTab}>
              <Icon name="staro" size={26} color="#fff" />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Rating</Text>
            </View>
            <View
              style={{
                width: '85%',
                backgroundColor: '#ebebeb',
                height: 1,
                position: 'absolute',
                bottom: 30,
              }}></View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    height: 420,
    backgroundColor: '#e74c3c',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  profileHeader: {
    paddingHorizontal: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 30,
  },
  profileImageContainer: {
    width: 170,
    height: 170,
    borderRadius: 100,
    shadowColor: '#e74c3c',
    shadowOpacity: 0.8,
    shadowRadius: 50,
    shadowOffset: {width: 0, height: 10},
    elevation: 10,
  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  profileHeaderText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  profileName: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileStatSection: {
    marginHorizontal: 25,
    paddingTop: 35,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  statTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
