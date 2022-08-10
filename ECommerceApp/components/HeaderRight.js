import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function HeaderRight({wishList, cart}) {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="shopping-bag"
        size={25}
        color={colors.lightBlue}
        onPress={cart}
      />

      <AntDesign
        name="heart"
        size={25}
        color={colors.lightBlue}
        onPress={wishList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default HeaderRight;
