import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import OrderCard from '../components/OrderCard';
const OrderList = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={[0]}
        renderItem={() => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderDetails');
              }}>
              <OrderCard />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default OrderList;
