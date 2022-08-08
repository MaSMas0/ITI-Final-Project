import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import MoreOrderDetails from '../components/MoreOrderDetailsCom';
const OrdersMe = ({navigation}) => {
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MoreOrderItemDetails');
        }}>
        <MoreOrderDetails />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MoreOrderItemDetails');
        }}>
        <MoreOrderDetails />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MoreOrderItemDetails');
        }}>
        <MoreOrderDetails />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MoreOrderItemDetails');
        }}>
        <MoreOrderDetails />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MoreOrderItemDetails');
        }}>
        <MoreOrderDetails />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OrdersMe;
