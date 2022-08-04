import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import colors from '../config/colors';

import SecondryButton from '../components/SecondryButton';

const Payment = () => {
  const [checked, setChecked] = useState('first');
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.barContainer}>
          <View style={styles.barStyle}>
            <Text></Text>
          </View>
          <View style={styles.barStyle}>
            <Text></Text>
          </View>
        </View>
        <View style={styles.payCon}>
          <Text style={styles.payText}> Choose Paymeny Method</Text>
        </View>

        <View style={styles.textCont}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.textStyle}> Nile Pay (0 $)</Text>
          </View>

          <RadioButton
            color="blue"
            value="first"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>

        <View style={styles.textCont}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.textStyle}> Pay With Card</Text>
          </View>

          <RadioButton
            color="blue"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>
        <View style={styles.textCont}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.textStyle}> Cash on Delivery (COD)</Text>
          </View>

          <RadioButton
            color="blue"
            value="first"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
        </View>
      </View>
      <View style={{alignItems: 'center', paddingVertical: 300}}>
        <SecondryButton
          title="CONTINUE TO PAYMENT"
          onPress={() => setShow(true)}
          style={styles.secondaryButton}
        />
      </View>
      <View
        style={{
          margin: 20,
        }}>
        <Modal transparent={true} animationType="fade" visible={show}>
          <View
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
            }}>
            <View style={styles.popUpCont}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text style={styles.blueText}>Sub Total</Text>
                <Text style={styles.blackText}>976.0 USD</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 25,
                }}>
                <Text style={styles.blueText}>Shipping Fees</Text>
                <Text style={styles.blackText}>30.0 USD</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 30,
                }}>
                <TextInput
                  maxLength={3}
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  placeholder="Coupon Code"
                />
                <Text style={styles.validateStyle}>Validate</Text>
              </View>

              <Text style={styles.blueText}>Total Price</Text>
              <Text style={styles.blackText}>1006.0 USD</Text>
              <TouchableOpacity style={styles.orderStyle}>
                <Text style={styles.orderText}>Place Order</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShow(false)}
                style={styles.cancelBtn}>
                <Text style={styles.orderText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: colors.white,
  },
  barStyle: {
    borderColor: 'blue',
    borderBottomWidth: 3,
    width: '45%',
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  payCon: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },
  payText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
  textCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    borderBottomColor: colors.grey,
    backgroundColor: colors.white,
  },
  textStyle: {fontSize: 17, color: colors.black, fontWeight: 'bold'},
  secondaryButton: {
    backgroundColor: colors.blue,
    width: 250,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
  },
  popUpCont: {
    backgroundColor: colors.grey,
    margin: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    borderRadius: 30,
  },
  blueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blue,
  },
  blackText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.black,
  },
  textInput: {
    borderWidth: 1,
    width: 150,
    height: 40,
    borderRadius: 5,
    borderColor: colors.blue,
    color: colors.medium,
    fontSize: 19,
    textAlign: 'center',
  },
  validateStyle: {fontSize: 20, fontWeight: 'bold', color: colors.blue},
  orderStyle: {
    backgroundColor: colors.blue,
    width: 240,
    height: 46,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 45,
    position: 'relative',
    left: 30,
  },
  orderText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  cancelBtn: {
    backgroundColor: colors.medium,
    width: 240,
    height: 46,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: 30,
    marginBottom: 60,
  },
});

export default Payment;
