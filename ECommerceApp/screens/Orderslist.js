import React from 'react';
import {TouchableOpacity, ScrollView, View, FlatList} from 'react-native';
import OrderDetails from './OrderDetails';
const Orders = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={[0, 0, 0, 0, 0, 0, 0, 0]}
        renderItem={() => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MoreOrderItemDetails');
              }}>
              <OrderDetails />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Orders;
