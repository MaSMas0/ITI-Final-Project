import React from 'react';
import {TouchableOpacity, Text, ScrollView, View, FlatList} from 'react-native';
import OrderDetails from './OrderDetails';
const Orders = ({navigation}) => {
  const x = [];
  return (
    <View>
      {x.length == 0 && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>notfound</Text>
        </View>
      )}

      {x.length !== 0 && (
        <FlatList
          data={x}
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
      )}
    </View>
  );
};

export default OrderList;
