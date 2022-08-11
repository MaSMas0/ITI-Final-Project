import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import AuthNavigator from '../navigation/AuthNavigator';
import DrawerNavigator from '../navigation/DrawerNavigator';

function Choice(props) {
  const userLogin = useSelector(state => state.userLogin);
  const {loading, error, userInfo} = userLogin;
  return (
    <>
      {userInfo && <DrawerNavigator />}
      {!userInfo && <AuthNavigator />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Choice;
