import React, {useState, useEffect} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import colors from '../config/colors';

import SecondryButton from '../components/SecondryButton';
import {useDispatch, useSelector} from 'react-redux';
import {savePaymentMethod} from '../actions/CartActions';
import routes from '../navigation/routes';
const Payment = ({navigation}) => {
  const {loading, error, userInfo} = useSelector(state => state.userLogin);
  const cart = useSelector(state => state.cart);
  const {
    cartItems,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = cart;
  console.log(cartItems);
  console.log(itemsPrice);
  console.log(paymentMethod);
  console.log(shippingPrice);
  console.log(taxPrice);
  console.log(totalPrice);
  const [checked, setChecked] = useState('Debit or Credit Card');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleContinueToPayment = () => {
    setShow(true);
    dispatch(savePaymentMethod(checked));
  };

  useEffect(() => {
    if (!userInfo) {
      navigation.navigate(routes.WelcomeScreen);
    }
  }, [userInfo]);
  return (
    <ScrollView>
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
            <Text style={styles.textStyle}> Pay with PayPal</Text>
          </View>

          <RadioButton
            color="blue"
            value="Pay with PayPal"
            status={checked === 'Pay with PayPal' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Pay with PayPal')}
          />
        </View>

        <View style={styles.textCont}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.textStyle}> Debit or Credit Card</Text>
          </View>

          <RadioButton
            color="blue"
            value="Debit or Credit Card"
            status={
              checked === 'Debit or Credit Card' ? 'checked' : 'unchecked'
            }
            onPress={() => setChecked('Debit or Credit Card')}
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
            value="Cash on Delivery (COD)"
            status={
              checked === 'Cash on Delivery (COD)' ? 'checked' : 'unchecked'
            }
            onPress={() => setChecked('Cash on Delivery (COD)')}
          />
        </View>
      </View>
      <View style={{alignItems: 'center', paddingVertical: 300}}>
        <SecondryButton
          title="CONTINUE TO PAYMENT"
          onPress={handleContinueToPayment}
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
                <Text style={styles.blueText}>Items</Text>
                <Text style={styles.blackText}>$ {itemsPrice}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text style={styles.blueText}>Shipping Fees</Text>
                <Text style={styles.blackText}>$ {shippingPrice}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 25,
                }}>
                <Text style={styles.blueText}>Tax</Text>
                <Text style={styles.blackText}>$ {taxPrice}</Text>
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
              <Text style={styles.blackText}>$ {totalPrice} </Text>
              <TouchableOpacity
                style={styles.orderStyle}
                onPress={() => navigation.navigate('OrderDetails')}>
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
    </ScrollView>
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
    marginBottom: 120,
  },
});

export default Payment;
