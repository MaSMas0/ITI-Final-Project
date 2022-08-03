import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import colors from '../config/colors';

const Payment = () => {
  const [checked, setChecked] = useState('first');
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 12,
          }}>
          <Text style={{fontSize: 17, color: colors.black, fontWeight: '700'}}>
            {' '}
            Online Payment
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 30,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
          }}>
          <RadioButton
            color="#ffc107"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={{fontSize: 20, color: colors.black, fontWeight: '700'}}>
            {' '}
            Apple Pay
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 12,
          }}>
          <Text style={{fontSize: 17, color: colors.black, fontWeight: '700'}}>
            {' '}
            More payment option
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 30,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
          }}>
          <RadioButton
            color="#ffc107"
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={{fontSize: 20, color: colors.black, fontWeight: '700'}}>
            Cash On Delivery (COD)
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          backgroundColor: '#ffc107',
          width: 270,
          height: 49,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 500,
          left: 60,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '700',
          }}>
          CONTINUE TO PAYMENT
        </Text>
      </TouchableOpacity>
      <View
        style={{
          margin: 20,
        }}>
        <Modal transparent={true} visible={show}>
          <View
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                margin: 30,
                paddingHorizontal: 20,
                paddingTop: 30,
                borderRadius: 30,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#8e24aa'}}>
                  Sub Totle
                </Text>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#8e24aa'}}>
                  976.0 USD
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 25,
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#8e24aa'}}>
                  Shipping Fees
                </Text>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#8e24aa'}}>
                  30.0 USD
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 30,
                }}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    width: 150,
                    height: 40,
                  }}
                />
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#6a1b9a'}}>
                  Validate
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#8e24aa'}}>
                  Shipping Fees
                </Text>
                <Text style={{fontSize: 17, fontWeight: '600', color: 'red'}}>
                  30.0 USD
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '800',
                  color: '#000',
                  marginBottom: 10,
                }}>
                Grand Total
              </Text>
              <Text style={{fontSize: 18, fontWeight: '800', color: '#6a1b9a'}}>
                1006.0 USD
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#6a1b9a',
                  width: 240,
                  height: 46,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 20,
                  marginTop: 45,
                  position: 'relative',
                  left: 30,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: '700',
                  }}>
                  Place Order
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShow(false)}
                style={{
                  backgroundColor: 'red',
                  width: 240,
                  height: 46,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  left: 30,
                  marginBottom: 60,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: '700',
                  }}>
                  Cancele
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
