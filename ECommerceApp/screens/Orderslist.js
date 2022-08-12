import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {listMyOrders} from '../actions/OrderActions';
import OrderCard from '../components/OrderCard';
import colors from '../config/colors';
const OrderList = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  const orderListMy = useSelector(state => state.orderListMy);
  const {loading: loadingOrders, error: errorOrders, orders} = orderListMy;
  return (
    <View>
      {orders.length == 0 && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '100%',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.blue,
              padding: 10,
              fontWeight: 'bold',
            }}>
            Oops! No Orders Yet
          </Text>
          <Image
            source={require('../assets/Empty-pana.png')}
            style={{
              width: 300,
              height: 280,
            }}
          />
        </View>
      )}

      {orders.length !== 0 && (
        <FlatList
          data={orders}
          renderItem={order => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('OrderDetails', order);
                }}>
                <OrderCard order={order} />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default OrderList;
