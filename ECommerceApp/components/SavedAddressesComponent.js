import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const AddressComp = ({navigation, countryName, location, phoneNumber}) => {
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 30,
        paddingTop: 15,
      }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AntDesign name="earth" size={17} />
          <Text style={styles.firstText}> Country:</Text>
          <Text style={styles.blueText}> {countryName}</Text>
        </View>
        <View style={styles.secondRow}>
          <Entypo name="map" size={17} />
          <Text style={styles.firstText}> Address:</Text>
          <Text style={styles.blueText}> {location}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.firstText}>
            <Ionicons name="call" size={17} /> Phone:
          </Text>
          <Text style={styles.blueText}> {phoneNumber}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  blueText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.blue,
  },
  firstText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    paddingVertical: 15,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AddressComp;
