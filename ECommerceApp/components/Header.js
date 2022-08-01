import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from './SearchBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <SearchBar />
      <AntDesign name="shoppingcart" size={25}></AntDesign>
      <AntDesign name="heart" size={25}></AntDesign>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
});
export default Header;
