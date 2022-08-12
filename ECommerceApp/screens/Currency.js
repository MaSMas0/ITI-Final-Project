import React, {useState} from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Currency = () => {
  const [show, setShow] = useState(false);
  const [currency, setCurrency] = useState('EGP');

  function handelCurrencyEgy() {
    setCurrency('EGP');
    setShow(false);
  }
  function handelCurrencyUsd() {
    setCurrency('USD');
    setShow(false);
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setShow(true)}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 13,
            borderRadius: 25,
            paddingVertical: 20,
            paddingHorizontal: 20,
            margin: 10,
          }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
            }}>
            Currency
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: 5,
                fontSize: 16,
                fontWeight: '600',
              }}>
              {currency}
            </Text>
            <AntDesign
              style={{
                marginTop: 2,
              }}
              name="right"
              size={20}></AntDesign>
            <Modal transparent={true} animationType="fade" visible={show}>
              <View
                style={{
                  backgroundColor: '#000000aa',
                  flex: 1,
                }}>
                <View
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    margin: 50,
                    marginTop: 200,
                    borderRadius: 30,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 25,
                      borderBottomWidth: 2,
                      borderColor: 'grey',
                    }}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Choose Currency
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      paddingVertical: 10,
                    }}>
                    <View
                      style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderEndWidth: 2,
                        borderColor: 'grey',
                        paddingVertical: 6,
                      }}>
                      <Text
                        onPress={() => handelCurrencyUsd()}
                        style={{
                          fontSize: 17,
                          fontWeight: '800',

                          color: '#0091ea',
                        }}>
                        USD
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        onPress={() => handelCurrencyEgy()}
                        style={{
                          fontSize: 17,
                          fontWeight: '800',
                          color: '#0091ea',
                        }}>
                        EGP
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Currency;
