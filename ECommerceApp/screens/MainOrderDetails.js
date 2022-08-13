import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getOrderDetails} from '../actions/OrderActions';
import ProductInOrderCard from '../components/ProductInOrderCard';

const MainOrderDetails = ({route}) => {
  const {userInfo} = useSelector(state => state.userLogin);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (route.params.item != undefined) {
  //     dispatch(getOrderDetails(route.params.item._id));
  //   } else {
  //     dispatch(getOrderDetails(route.params._id));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

  // const orderDetail = useSelector(state => state.orderDetails.order);
  // console.log(order);
  // console.log(route.params);
  const order = route.params.item ? route.params.item : route.params;
  console.log(order);
  return (
    <ScrollView style={{}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.head}>Order No. : {order._id}</Text>
        </View>
        <Text style={styles.head}>SHIPPING INFO</Text>
        <View style={styles.DeliveryOpt}>
          <Text style={styles.head2}>Customer Info</Text>
          <Text style={styles.head3}>Name: {userInfo.name}</Text>
          <Text style={styles.line}></Text>

          <Text style={styles.head2}>Shipping Address</Text>
          <Text style={styles.head3}>
            {' '}
            {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
            {order.shippingAddress.postalCode}, {order.shippingAddress.country}
          </Text>
        </View>
        {order.isDelivered ? (
          <View
            style={{
              backgroundColor: colors.white,
              marginHorizontal: 10,
              borderRadius: 8,
              marginVertical: 2,
            }}>
            <Text style={styles.deliverd}>Delivered</Text>
            <Text
              style={{
                color: 'black',
                margin: 5,
                fontWeight: 'bold',
              }}>
              On {order.deliveredAt.substring(0, 10)}
            </Text>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: colors.white,
              marginHorizontal: 10,
              borderRadius: 8,
              marginVertical: 2,
            }}>
            <Text style={styles.notdelivered}>Not Delivered</Text>
          </View>
        )}

        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,
            marginHorizontal: 10,
            fontWeight: 'bold',
          }}>
          PAYMENT
        </Text>
        <View style={styles.paymentCard}>
          <Text style={styles.head2}>Payment Method</Text>
          <Text style={{marginHorizontal: 8}}>{order.paymentMethod}</Text>
          <Text style={styles.line}></Text>
          <Text style={styles.head2}>Payment Details</Text>
          <Text style={styles.head3}>
            Items Totals :{' '}
            <Text style={styles.head4}>
              {(
                order.totalPrice -
                order.taxPrice -
                order.shippingPrice
              ).toFixed(2)}
            </Text>
          </Text>
          <Text style={styles.head3}>
            Shipping Fees :{' '}
            <Text style={styles.head4}>{order.shippingPrice}</Text>
          </Text>
          <Text style={styles.head3}>
            Tax Fees : <Text style={styles.head4}>{order.taxPrice}</Text>
          </Text>
          <Text style={styles.head3}>
            Total : <Text style={styles.head4}>{order.totalPrice}</Text>
          </Text>
        </View>
        <View></View>
        {order.isPaid ? (
          <View
            style={{
              backgroundColor: colors.white,
              marginHorizontal: 10,
              borderRadius: 8,
              marginVertical: 2,
            }}>
            <Text style={styles.deliverd}>Paid</Text>
            <Text
              style={{
                color: 'black',
                margin: 5,
                fontWeight: 'bold',
              }}>
              On {order.paidAt.substring(0, 10)}
            </Text>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: colors.white,
              marginHorizontal: 10,
              borderRadius: 8,
              marginVertical: 2,
            }}>
            <Text style={styles.notdelivered}>Not Paid</Text>
          </View>
        )}
        <View>
          <Text style={styles.head}>ITEMS IN YOUR ORDER </Text>
        </View>
        {order.orderItems.map(item => (
          <View key={item._id} style={{backgroundColor: 'white'}}>
            <ProductInOrderCard item={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    // height:'100%',
    justifyContent: 'space-between',
    // margin:10
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginBottom: 10,
    height: 150,
    borderRadius: 10,
  },
  orderDetials: {
    marginHorizontal: 5,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: '100%',
  },
  img: {
    width: 150,
    height: 100,
  },
  DeliveryOpt: {
    backgroundColor: colors.white,
    height: 180,
    justifyContent: 'space-evenly',
    margin: 10,
    borderRadius: 10,

    // margin:5
  },
  paymentCard: {
    backgroundColor: colors.white,
    height: 200,
    justifyContent: 'space-evenly',
    margin: 10,
    borderRadius: 10,
  },
  head: {
    margin: 10,
    fontWeight: 'bold',
  },
  head2: {
    color: colors.black,
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  head3: {
    marginHorizontal: 8,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },
  deliverd: {
    backgroundColor: '#3CCF4E',
    height: 25,
    width: 80,
    // justifyContent:'center',
    // alignItems:'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    borderRadius: 5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  notdelivered: {
    backgroundColor: 'red',
    height: 25,
    width: 80,
    // justifyContent:'center',
    // alignItems:'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    borderRadius: 5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  head4: {
    color: colors.black,
  },
});

export default MainOrderDetails;
