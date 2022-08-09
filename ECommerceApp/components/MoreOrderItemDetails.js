import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {block} from 'react-native-reanimated';
import colors from '../config/colors';

const MoreOrderItemDetails = () => {
  return (
    <View style={styles.allPage}>
      <View style={styles.part}>
        <Text style={styles.txt1}>
          SHIPPING TO : <Text style={{color: 'black'}}>Moatz</Text>
        </Text>
        <Text style={styles.txt}>
          CREATION DATE :{' '}
          <Text style={{color: 'black'}}> 2022-8-12 +02:00 </Text>
        </Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.all}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
        <Text style={styles.txt1}>
          PRICE : <Text style={{color: 'black'}}>249.00</Text>
        </Text>
        <Text style={styles.txt}>
          QUANTATY :<Text style={{color: 'black'}}> 1 </Text>
        </Text>
      </View>
      {/* <View style={styles.part}>
        <Text style={styles.all}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
        <Text style={styles.txt1}>
          PRICE : <Text style={{color: 'black'}}>59.00</Text>
        </Text>
        <Text style={styles.txt}>
          QUANTATY :<Text style={{color: 'black'}}> 4 </Text>
        </Text>
      </View> */}
    </View>
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
    // marginTop: 15,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    textTransform: 'capitalize',
  },
  part: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
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
    height: '100%',
    // margin: 15,
    // padding: 15,
  },
});

export default MoreOrderItemDetails;
