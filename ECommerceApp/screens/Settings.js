import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TopNavigator from '../navigation/TopNavigator';
import TabViewExample from './Ansary';

function Settings(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.userName}>Kareem Ansary</Text>
            <Text style={styles.email}>kareem.ansary@gmail</Text>
          </View>
          <Image style={styles.image} source={require('../assets/rr.png')} />
        </View>
      </View>

      <TopNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '20%',
  },
  image: {
    width: 60,
    height: 60,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 22,
  },

  email: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Settings;
