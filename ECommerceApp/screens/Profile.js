import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../config/colors';
import AuthNavigator from '../navigation/AuthNavigator';
import routes from '../navigation/routes';
import TopNavigator from '../navigation/TopNavigator';

function Settings({navigation}) {
  const userInfo = useSelector(state => state.userLogin.userInfo);

  // useEffect(() => {
  //   if (!userInfo) {
  //     navigation.replace(routes.AuthScreens);
  //   }
  // }, []);

  return (
    <>
      {!userInfo && (
        <NavigationContainer independent={true}>
          <AuthNavigator />
        </NavigationContainer>
      )}

      <View style={styles.container}>
        <View style={styles.infoContainer}>
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
