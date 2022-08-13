import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import routes from '../navigation/routes';

const SplashScreen = ({navigation}) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      navigation.replace(routes.AppScreen);
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#110034" barStyle="light-content" />
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[styles.image, {opacity: fadeAnim}]}
          source={require('../assets/logo.jpg')}
        />
        <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
          <Text style={[styles.logoText1]}>Nile </Text>
          <Animated.Text style={[styles.logoText2, {opacity: fadeAnim}]}>
            Buy
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#110034',
  },
  logoText1: {
    fontSize: 35,

    color: '#ff47be',
    fontWeight: '700',
    marginLeft: 30,
  },
  logoText2: {
    fontSize: 35,

    color: '#d1e5fd',
    fontWeight: '700',
  },
  contentContainer: {
    top: '30%',
    alignItems: 'center',
  },
  image: {
    // backgroundColor: 'white',
    // color: 'white',
    width: 300,
    height: 300,
  },
  logoContainer: {
    flexDirection: 'row',
  },
});
