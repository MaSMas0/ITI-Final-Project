import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import WishlistComponent from '../components/WishlistComponant';
import {useSelector} from 'react-redux';

const WishList = ({navigation}) => {
  const wishLists = useSelector(state => state.wishLists.wishLists);

  return (
    <SafeAreaView>
      {wishLists.length === 0 ? (
        <View style={styles.notFoundContainer}>
          <Image
            source={require('../assets/EmptyWishlist.png')}
            style={{
              width: 200,
              height: 180,
            }}
          />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          numColumns={3}
          data={wishLists}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails', {item})}>
                <WishlistComponent wishLists={item} />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notFoundContainer: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WishList;
