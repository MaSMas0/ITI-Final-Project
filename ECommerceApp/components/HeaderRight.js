import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
function HeaderRight({wishList, cart}) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="shoppingcart"
        size={25}
        color={colors.medium}
        onPress={cart}
      />

      <AntDesign
        name="hearto"
        size={25}
        color={colors.medium}
        onPress={wishList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-around',
  },
});

export default HeaderRight;
