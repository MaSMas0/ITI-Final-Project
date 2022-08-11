import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';
import SecondryButton from '../components/SecondryButton';

const WelcomePage = () => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'darkgrey',
        height: '100%',
        //   //   display: flex,
        //   flex: 1,
        //   justifyContent: 'center',
        //   alignContent: 'center',
      }}>
      <View
        style={{
          marginBottom: 26,
        }}>
        <Image style={styles.imgStyle} source={require('../assets/logo.png')} />
      </View>
      <Text
        style={{
          fontSize: 16,
          padding: 15,
        }}>
        Welcome , Happy to see you ,You must login in Application to Enjoy by
        Our features
      </Text>

      <SecondryButton style={styles.btnStyle} title="SIGN IN" />
      <SecondryButton style={styles.btnStyle} title="LOGIN" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 250,
    height: 250,
  },
  btnStyle: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default WelcomePage;
