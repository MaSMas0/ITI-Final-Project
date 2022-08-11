import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Settings from '../screens/Profile';
import AboutScreen from '../screens/AboutScreen';
import ContactUs from '../screens/ContactUs';
import AddressNavigator from './AddressNavigator';
import colors from '../config/colors';

import Drawerheader from '../components/Drawerheader';
import Currency from '../screens/Currency';
import routes from './routes';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Drawerheader {...props} />}
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
              style={{marginRight: 15}}
            />
          </TouchableOpacity>
        ),
        drawerActiveTintColor: colors.blue,
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}>
      <Drawer.Screen
        // style={{color: 'red'}}
        name={routes.profile}
        component={Settings}
        options={{
          title: 'Profile',
          drawerIcon: ({color, size, focused}) => (
            <AntDesign name="user" color={color} size={25} />
          ),
        }}
      />
      <Drawer.Screen
        name={routes.Address}
        component={AddressNavigator}
        options={{
          title: 'Address',
          drawerIcon: ({color, size, focused}) => (
            <EvilIcons name="location" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.Currency}
        component={Currency}
        options={{
          title: 'Currency',
          drawerIcon: ({color, size, focused}) => (
            <AntDesign name="wallet" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.ContactUs}
        component={ContactUs}
        options={{
          title: 'Contact Us',
          drawerIcon: ({color, size, focused}) => (
            <MaterialIcons name="contact-mail" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.AboutScreen}
        component={AboutScreen}
        options={{
          title: 'About',
          drawerIcon: ({color, size, focused}) => (
            <MaterialIcons name="import-contacts" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
