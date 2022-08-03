import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Settings from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerPosition: 'right',
        headerLeft: false,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <AntDesign
              name="setting"
              size={27}
              color="black"
              style={{marginRight: 5}}
            />
          </TouchableOpacity>
        ),
      }}>
      <Drawer.Screen name="profile" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
