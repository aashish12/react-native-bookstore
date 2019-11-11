import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../components/layouts/Header';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          styles={styles.mainContent}>
          <Text
            style={{
              paddingHorizontal: 25,
              paddingVertical: 20,
              fontSize: 19,
              fontWeight: 'bold',
              color: '#777',
            }}>
            My Books
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.myBooks}>
            <View style={styles.booksContainer}>
              <View>
                <Image
                  style={styles.singleBook}
                  source={require('./../../assets/img/book1.png')}
                />
                <Text style={styles.bookTitle}>The Lean Startup</Text>
              </View>
              <View>
                <Image
                  style={styles.singleBook}
                  source={require('./../../assets/img/book2.jpg')}
                />
                <Text style={styles.bookTitle}>The Lean Startup</Text>
              </View>
              <View>
                <Image
                  style={styles.singleBook}
                  source={require('./../../assets/img/book3.jpg')}
                />
                <Text style={styles.bookTitle}>Think more act less</Text>
              </View>
              <View>
                <Image
                  style={styles.singleBook}
                  source={require('./../../assets/img/book4.jpg')}
                />
                <Text style={styles.bookTitle}>Harry potter</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 230,
                  margin: 5,
                  borderColor: '#777',
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>+</Text>
                <Text>Add New</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.wishlistBooksContainer}>
            <Text
              style={{
                paddingHorizontal: 25,
                paddingVertical: 20,
                fontSize: 19,
                fontWeight: 'bold',
                color: '#777',
              }}>
              My Wishlist Books
            </Text>
            <View style={styles.wishlistContainer}>
              <View style={styles.wishlistBook}>
                <Image
                  style={[styles.singleBook, styles.singleWishlistBook]}
                  source={require('./../../assets/img/book4.jpg')}
                />
                <View style={styles.wishlistBookDetail}>
                  <Text style={styles.wishlistBookTitle}>There and There</Text>
                  <Text style={{flex: 2}}>Tommy Orange</Text>
                  <Text>rating stars</Text>
                </View>
              </View>

              <View style={styles.wishlistBook}>
                <Image
                  style={[styles.singleBook, styles.singleWishlistBook]}
                  source={require('./../../assets/img/book3.jpg')}
                />
                <View style={styles.wishlistBookDetail}>
                  <Text style={styles.wishlistBookTitle}>Harry Potter</Text>
                  <Text style={{flex: 2}}>J.K. Rowling</Text>
                  <Text>rating stars</Text>
                </View>
              </View>

              <View style={styles.wishlistBook}>
                <Image
                  style={[styles.singleBook, styles.singleWishlistBook]}
                  source={require('./../../assets/img/book2.jpg')}
                />
                <View style={styles.wishlistBookDetail}>
                  <Text style={styles.wishlistBookTitle}>
                    Think More Act Less
                  </Text>
                  <Text style={{flex: 2}}>Sally Benson</Text>
                  <Text>rating stars</Text>
                </View>
              </View>

              <View style={styles.wishlistBook}>
                <Image
                  style={[styles.singleBook, styles.singleWishlistBook]}
                  source={require('./../../assets/img/book1.png')}
                />
                <View style={styles.wishlistBookDetail}>
                  <Text style={styles.wishlistBookTitle}>The Lean Startup</Text>
                  <Text style={{flex: 2}}>Eric Ries</Text>
                  <Text>rating stars</Text>
                </View>
              </View>

              <View style={styles.wishlistBook}>
                <Image
                  style={[styles.singleBook, styles.singleWishlistBook]}
                  source={require('./../../assets/img/book4.jpg')}
                />
                <View style={styles.wishlistBookDetail}>
                  <Text style={styles.wishlistBookTitle}>There and There</Text>
                  <Text style={{flex: 2}}>Tommy Orange</Text>
                  <Text>rating stars</Text>
                </View>
              </View>

              <View style={styles.wishlistBook}>
                <Image
                  style={[styles.singleBook, styles.singleWishlistBook]}
                  source={require('./../../assets/img/book3.jpg')}
                />
                <View style={styles.wishlistBookDetail}>
                  <Text style={styles.wishlistBookTitle}>Harry Potter</Text>
                  <Text style={{flex: 2}}>J.K. Rowling</Text>
                  <Text>rating stars</Text>
                </View>
              </View>

              <View style={styles.wishlistBook}>
                <Image
                  style={[styles.singleBook, styles.singleWishlistBook]}
                  source={require('./../../assets/img/book2.jpg')}
                />
                <View style={styles.wishlistBookDetail}>
                  <Text style={styles.wishlistBookTitle}>
                    Think More Act Less
                  </Text>
                  <Text style={{flex: 2}}>Sally Benson</Text>
                  <Text>rating stars</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
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
  mainContent: {
    flex: 1,
  },
  booksContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  myBooks: {
    // marginVertical: 20,
  },
  bookTitle: {
    fontSize: 18,
    color: '#444',
    fontWeight: '600',
    marginHorizontal: 10,
  },
  singleBook: {
    width: 150,
    height: 230,
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  wishlistBooksContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  wishlistContainer: {
    paddingHorizontal: 25,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wishlistBook: {
    flexDirection: 'row',
    marginTop: 20,
  },
  singleWishlistBook: {
    width: 80,
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  wishlistBookDetail: {
    justifyContent: 'space-between',
  },
  wishlistBookTitle: {
    fontSize: 17,
    width: 100,
  },
});

export default HomeScreen;
