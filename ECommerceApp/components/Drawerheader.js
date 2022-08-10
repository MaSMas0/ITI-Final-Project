import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';
function Drawerheader(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={require('../assets/account.png')}
          />
          <View>
            <Text style={styles.name}>kareem Ansary</Text>
            <Text style={styles.email}>kareem.ansary@gmail.com</Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingEnd: 135,
            marginBottom: 20,
          }}>
          <AntDesign name="logout" size={22} color={colors.medium} />
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.lightGrey,
  },
  image: {
    height: 60,
    width: 60,
    marginEnd: 5,
  },
  name: {
    color: colors.black,
    fontSize: 17.5,
    fontWeight: '700',
  },
  email: {
    color: colors.medium,
    fontWeight: '400',
  },
  profile: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
    marginBottom: 15,
  },
});

export default Drawerheader;
