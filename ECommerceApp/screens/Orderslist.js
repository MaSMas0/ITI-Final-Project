import React from 'react';
import {TouchableOpacity, Text, ScrollView, View, FlatList,Image} from 'react-native';
import colors from '../config/colors';
import OrderDetails from './OrderDetails';
const OrderList = ({navigation}) => {
  const x = [];
  return (
    <View>
      {x.length == 0 && (
        <View style={{alignItems: 'center', justifyContent: 'space-evenly',
        height:'100%'}}>
          <Text style={{
            fontSize:18,
            color:colors.blue,
            padding:10,
            fontWeight:'bold'
          }}>Oops! No Orders Yet</Text>
          <Image
            source={require('../assets/Empty-pana.png')}
            style={{
              width: 300,
              height: 280,
            }}
          />
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
