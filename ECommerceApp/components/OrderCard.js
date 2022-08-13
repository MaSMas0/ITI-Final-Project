import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';

import colors from '../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OrderCard = ({order}) => {
  const orderitem = order.item;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image style={styles.img} source={require('../assets/cc.png')} />
        </View>
        <View>
          <View style={styles.part}>
            {/* <Text style={styles.txt1}>
          SHIPPING TO : <Text style={{color: 'black'}}>Moatz</Text>
        </Text> */}
            <Text style={styles.txt}>
              DATE :<Text style={{color: 'black'}}>{orderitem.createdAt}</Text>
            </Text>

            {/* <Text style={styles.all}>product Name</Text> */}
            <Text style={styles.txt1}>
              PRICE :{' '}
              <Text style={{color: 'black'}}>$ {orderitem.totalPrice}</Text>
            </Text>
            <Text style={styles.txt1}>
              Paid :
              <Text style={{color: 'black'}}>
                {' '}
                {order.isPaid ? (
                  order.paidAt.substring(0, 10)
                ) : (
                  <FontAwesome
                    name="remove"
                    size={15}
                    color="red"></FontAwesome>
                )}{' '}
              </Text>
            </Text>
            <Text style={styles.txt1}>
              Delivered :
              <Text style={{color: 'black'}}>
                {' '}
                {order.isDelivered ? (
                  order.deliveredAt.substring(0, 10)
                ) : (
                  <FontAwesome
                    name="remove"
                    size={15}
                    color="red"></FontAwesome>
                )}{' '}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.grey,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  order: {
    color: 'red',
    fontWeight: 'bold',
    margin: 8,
    // marginStart: 10,
    // marginBottom: 5,
  },
  all: {
    // paddingVertical: 8,
    fontSize: 12,
    // color: 'black',
    textTransform: 'capitalize',
    color: colors.blue,
    // flexDirection:'row'
    // margin:5
  },
  part: {
    // backgroundColor: 'white',
    borderRadius: 5,
    // padding: 10,
    margin: 10,
  },
  txt: {
    fontSize: 12,

    color: colors.blue,
    // display: 'block',
  },
  txt1: {
    fontSize: 12,
    color: colors.blue,
  },
  allPage: {
    backgroundColor: colors.grey,
    height: '100%',
    // margin: 15,
    // padding: 15,
  },
  img: {
    width: 150,
    height: 150,
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
    marginTop: 5,
    fontSize: 12,
  },
});

export default OrderCard;
