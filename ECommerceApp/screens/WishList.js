import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import WishlistComponent from '../components/WishlistComponant';
import {useSelector} from 'react-redux';

const WishList = () => {
  const wishLists = useSelector(state => state.wishLists.wishLists);

  return (
    <SafeAreaView>
      <ScrollView>
        {wishLists.length === 0 ? (
          <Text>not found</Text>
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

export default WishList;
