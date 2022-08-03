import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import WishlistComponent from '../components/WishlistComponant';

import colors from '../config/colors';

const WishList = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: 20,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          marginVertical: 10,
          marginBottom: 30,
          //   paddingBottom: 10,
          //   borderBottomWidth: 1,
          borderColor: 'grey',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}></View>
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
