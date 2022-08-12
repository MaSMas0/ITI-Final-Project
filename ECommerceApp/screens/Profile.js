import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthNavigator from '../navigation/AuthNavigator';
import routes from '../navigation/routes';
import TopNavigator from '../navigation/TopNavigator';
import * as Animatable from 'react-native-animatable';
function Settings({navigation}) {
  const userLogin = useSelector(state => state.userLogin);
  const {loading, error, userInfo} = userLogin;
  const [showArrow, setShowArrow] = useState(true);
  console.log(userInfo, 'profile');

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(false);
    }, 4500);
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          {showArrow && (
            <Animatable.View
              iterationCount={2}
              duration={2000}
              animation="wobble"
              style={{
                position: 'absolute',
                right: 0,
                bottom: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="md-arrow-redo-outline"
                size={40}
                color={colors.blue}
              />
              <Text style={{color: colors.blue}}>swipe Left</Text>
            </Animatable.View>
          )}
          <Image
            style={styles.image}
            source={require('../assets/account.png')}
          />
          <View style={styles.welcomeUserCont}>
            {/* 
            <Text style={styles.email}>salem</Text> */}
          </View>
          <Text style={styles.welcomephrase}>It's Good to see you Again !</Text>
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
    height: '35%',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  image: {
    width: 120,
    height: 120,
  },
  welcomeUserCont: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  welcome: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.mediumBlue,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  welcomephrase: {
    fontSize: 15,
  },

  // email: {
  //   fontWeight: '500',
  //   fontSize: 12.5,
  //   marginStart: 2,
  // },
  infoContainer: {
    alignItems: 'center',
    // justifyContent: 'space-between',
    // marginTop: 30,
  },
});

export default Settings;
