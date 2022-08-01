import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from './SearchBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
function Header({title}) {
  return (
    <View style={styles.headerContainer}>
      <SearchBar title={title} />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-around',
        }}>
        <AntDesign
          name="shoppingcart"
          size={25}
          color={colors.black}></AntDesign>
        <AntDesign name="heart" size={25}></AntDesign>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingEnd: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Header;
