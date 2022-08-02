import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Settings from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="profile" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
