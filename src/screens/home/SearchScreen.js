import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import Header from '../../components/layouts/Header';

export class SearchScreen extends Component {
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <SafeAreaView style={{}}>
        <Header />
        <ScrollView>
          <View style={styles.carousalContainer}>
            <Image
              source={require('./../../assets/img/book1.png')}
              style={{
                width: '100%',
                height: 160,
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
            <View style={styles.navigationDotContainer}>
              <View style={[styles.navDot, styles.activeNavDot]}></View>
              <View style={styles.navDot}></View>
              <View style={styles.navDot}></View>
              <View style={styles.navDot}></View>
            </View>
          </View>

          <View style={styles.bookSelfContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.categories}>
                <Text style={[styles.category, styles.activeCategory]}>
                  Business
                </Text>
                <Text style={styles.category}>Design</Text>
                <Text style={styles.category}>Sports</Text>
                <Text style={styles.category}>Biography</Text>
                <Text style={styles.category}>History</Text>
                <Text style={styles.category}>Literature</Text>
                <Text style={styles.category}>Education</Text>
                <Text style={styles.category}>Technology</Text>
              </View>
            </ScrollView>

            <View style={styles.bookStoreContainer}>
              <View style={styles.bookSelfList}>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book2.jpg')}
                  />
                  <Text style={styles.bookTitle}>Think More Act Less</Text>
                  <Text style={styles.bookAuthor}>Sally Benson</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book4.jpg')}
                  />
                  <Text style={styles.bookTitle}>There and There</Text>
                  <Text style={styles.bookAuthor}>Tommy Orange</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book3.jpg')}
                  />
                  <Text style={styles.bookTitle}>Harry Potter Final</Text>
                  <Text style={styles.bookAuthor}>J.K. Rowling</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book3.jpg')}
                  />
                  <Text style={styles.bookTitle}>Harry Potter Final</Text>
                  <Text style={styles.bookAuthor}>J.K. Rowling</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book2.jpg')}
                  />
                  <Text style={styles.bookTitle}>Think More Act Less</Text>
                  <Text style={styles.bookAuthor}>Sally Benson</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book4.jpg')}
                  />
                  <Text style={styles.bookTitle}>There and There</Text>
                  <Text style={styles.bookAuthor}>Tommy Orange</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book2.jpg')}
                  />
                  <Text style={styles.bookTitle}>Think More Act Less</Text>
                  <Text style={styles.bookAuthor}>Sally Benson</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book4.jpg')}
                  />
                  <Text style={styles.bookTitle}>There and There</Text>
                  <Text style={styles.bookAuthor}>Tommy Orange</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book3.jpg')}
                  />
                  <Text style={styles.bookTitle}>Harry Potter Final</Text>
                  <Text style={styles.bookAuthor}>J.K. Rowling</Text>
                  <Text>Rating</Text>
                </View>
                <View style={styles.bookSelfItem}>
                  <Image
                    style={styles.bookImage}
                    source={require('./../../assets/img/book3.jpg')}
                  />
                  <Text style={styles.bookTitle}>Harry Potter Final</Text>
                  <Text style={styles.bookAuthor}>J.K. Rowling</Text>
                  <Text>Rating</Text>
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
  carousalContainer: {
    margin: 25,
  },
  navigationDotContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    flexDirection: 'row',
  },
  navDot: {
    width: 12,
    height: 12,
    borderRadius: 7,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 1,
  },
  activeNavDot: {
    backgroundColor: '#2ecc71',
    borderWidth: 0,
    width: 24,
    height: 12,
    borderRadius: 7,
    // shadowColor: '#000',
    // shadowOpacity: {width: 0, height: 10},
    // shadowOpacity: 1,
    // elevation: 5,
  },
  bookSelfContainer: {
    marginHorizontal: 25,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    paddingVertical: 10,
  },
  category: {
    marginRight: 10,
    fontSize: 18,
    color: '#888',
  },
  activeCategory: {
    fontSize: 24,
    color: '#444',
    fontWeight: 'bold',
  },
  bookStoreContainer: {
    paddingVertical: 20,
  },
  bookSelfList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bookSelfItem: {
    marginBottom: 20,
  },
  bookImage: {
    width: 113,
    height: 170,
    borderRadius: 6,
  },
  bookTitle: {
    width: 105,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#888',
  },
});

export default SearchScreen;
