import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';

const OrderCard = () => {
  return (
    <View style={styles.allPage}>
      {/* <View style={styles.all}>
        <Text style={styles.order}>MY ORDERS ....</Text>
        <View style={styles.part}>
          <Text style={styles.txt1}>
            PRICE : <Text style={{color: 'black'}}> 487.00 </Text>
          </Text>
          <Text style={styles.txt}>
            CREATION DATE :{' '}
            <Text style={{color: 'black'}}> 2022-8-12 +02:00 </Text>
          </Text>
        </View>
      </View> */}
      <View style={styles.all}>
        <Text style={styles.order}>MY ORDER ....</Text>

        <View style={styles.part}>
          <Text style={styles.txt1}>
            PRICE : <Text style={{color: 'black'}}> 487.00 </Text>
          </Text>
          <Text style={styles.txt}>
            CREATION DATE :
            <Text style={{color: 'black'}}> 2022-8-12 +02:00 </Text>
          </Text>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  order: {
    color: 'red',
    fontWeight: 'bold',
    marginStart: 10,
    marginBottom: 5,
  },
  all: {
    // backgroundColor: 'gray',
    marginTop: 15,
  },
  part: {
    backgroundColor: 'white',
    borderRadius: 13,
    padding: 15,
    marginTop: 5,
  },
  txt: {
    fontSize: 18,

    color: colors.blue,
    // display: 'block',
  },
  txt1: {
    fontSize: 18,
    marginBottom: 8,
    color: colors.blue,
  },
  allPage: {
    backgroundColor: colors.grey,

    // height: '100%',
    // margin: 15,
    // padding: 15,
  },
});

export default OrderCard;
