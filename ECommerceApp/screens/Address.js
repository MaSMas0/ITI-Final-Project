import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';
import React from 'react';
import SecondryButton from '../components/SecondryButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Address = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        margin: 30,
        marginVertical: 50,
      }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AntDesign name="earth" size={17} />
          <Text style={styles.firstText}> Country:</Text>
          <Text style={styles.blueText}> Egypt</Text>
        </View>
        <View style={styles.secondRow}>
          <Entypo name="map" size={17} />
          <Text style={styles.firstText}> Address:</Text>
          <Text style={styles.blueText}> Ismailia</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.firstText}>
            <Ionicons name="call" size={17} /> Phone:
          </Text>
          <Text style={styles.blueText}> 01276567619</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          paddingHorizontal: 30,
          alignItems: 'center',
          position: 'relative',
          top: 300,
        }}>
        <SecondryButton
          title="ADD NEW ADDRESS"
          style={styles.addAddress}
          onPress={() => {
            navigation.navigate('NewAddress');
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addAddress: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default Address;
