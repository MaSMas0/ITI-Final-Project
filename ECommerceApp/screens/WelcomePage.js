import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';
import SecondryButton from '../components/SecondryButton';
import ThirdButton from '../components/ThirdButton';
import * as Animatable from 'react-native-animatable';

import colors from '../config/colors';
import routes from '../navigation/routes';

const WelcomePage = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: colors.white,
        height: '100%',
        justifyContent: 'space-evenly',
      }}>
      <View style={{}}>
        <Animatable.Image
          style={styles.imgStyle}
          animation="wobble"
          duration={3500}
          iterationCount="infinite"
          source={require('../assets/logo2.png')}
        />
      </View>
      <View
        style={{
          marginBottom: 40,
          // backgroundColor:colors.blue,
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: colors.blue,
            textAlign: 'center',
            margin: 8,
          }}>
          Welcome To Nile Buy App
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: colors.lightBlue,
            marginHorizontal: 20,
          }}>
          Happy to see you ,You must login to the Application to Enjoy Our
          features ..
        </Text>
      </View>
      <View style={styles.btns}>
        {/* <ThirdButton style={styles.btnStyle} title="SIGNUP" /> */}
        <SecondryButton
          style={styles.btnStyle}
          title="SIGNUP"
          onPress={() => navigation.navigate(routes.LogOut)}
        />
        <SecondryButton
          style={styles.btnStyle}
          title="LOGIN"
          onPress={() => navigation.navigate(routes.LogIn)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    // backgroundColor:colors.lightBlue,
    width: 250,
    height: 250,
  },
  btns: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnStyle: {
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomePage;
