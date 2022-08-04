import React, {useState} from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Page1 = () => {
  const [show, setShow] = useState(false);
  const [currency, setCurrency] = useState('EGY');

  function handelCurrencyEgy() {
    setCurrency('EGY');
    setShow(false);
  }
  function handelCurrencyUsd() {
    setCurrency('USD');
    setShow(false);
  }

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 13,
          borderRadius: 25,
          paddingVertical: 13,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
          }}>
          Address
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
            Ismailia
          </Text>
          <AntDesign
            style={{
              marginTop: 2,
            }}
            name="right"
            size={20}></AntDesign>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 13,
          borderRadius: 25,
          paddingVertical: 13,
          marginVertical: 30,
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
            onPress={() => setShow(true)}
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
                    paddingVertical: 15,
                  }}>
                  <View>
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
                  <View>
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
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 13,
          borderRadius: 25,
          paddingVertical: 13,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
          }}>
          Contact us
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <AntDesign
            style={{
              marginTop: 2,
            }}
            name="right"
            size={20}></AntDesign>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 13,
          borderRadius: 25,
          paddingVertical: 13,
          marginVertical: 30,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
          }}>
          About us
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <AntDesign
            style={{
              marginTop: 2,
            }}
            name="right"
            size={20}></AntDesign>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#2979ff',
          width: 220,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          position: 'absolute',
          top: 420,
          left: 90,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            color: '#fff',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Page1;
