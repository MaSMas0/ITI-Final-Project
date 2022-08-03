import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import WishlistComponent from '../components/WishlistComponant';

const WishList = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <WishlistComponent />
        <WishlistComponent />
        <WishlistComponent />
        <WishlistComponent />
        <WishlistComponent />
        <WishlistComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishList;
