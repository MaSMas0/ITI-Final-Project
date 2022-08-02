import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AboutScreen from './AboutScreen';
import ContactUs from './ContactUs';
import SettingProfile from './SettingProfile';
// import AboutScreen from './AboutScreen';

function Settings(props) {
  return (
    <View style={styles.container}>
      {/* <AboutScreen />
      <ContactUs /> */}
      <SettingProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'red',
    fontSize: 56,
  },
});

export default Settings;
