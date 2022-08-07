import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../config/colors';
import TopNavigator from '../navigation/TopNavigator';

function Settings(props) {
  const userInfo = useSelector(state => state.userLogin.userInfo);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Image
            style={styles.image}
            source={require('../assets/account.png')}
          />
          <View>
            <Text style={styles.userName}>mahmoud </Text>
            <Text style={styles.email}>salem</Text>
          </View>
        </View>
      </View>
      <NavigationContainer independent={true}>
        <TopNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
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
    fontWeight: '500',
    fontSize: 12.5,
    marginStart: 2,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 30,
  },
});

export default Settings;
