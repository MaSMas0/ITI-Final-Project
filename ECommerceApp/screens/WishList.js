import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Image} from 'react-native';
import WishlistComponent from '../components/WishlistComponant';
import {useSelector} from 'react-redux';

const WishList = ({navigation}) => {
  const wishLists = useSelector(state => state.wishLists.wishLists);

  return (
    <SafeAreaView>
      <ScrollView>
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
          <View>
            {wishLists.map(wishList => (
              <WishlistComponent key={wishList._id} wishLists={wishList} />
            ))}
          </View>
        )}
      </ScrollView>
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
