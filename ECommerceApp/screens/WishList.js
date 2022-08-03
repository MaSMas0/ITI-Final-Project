import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import WishlistComponent from '../components/WishlistComponant';

import colors from '../config/colors';

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
