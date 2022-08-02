import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import WishlistComponent from '../components/WishlistComponant';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
        }}>
        <AntDesign name="left" size={25} />
        <View
          style={{
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            WishList
          </Text>
        </View>
      </View>
      <ScrollView>
        <WishlistComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishList;
