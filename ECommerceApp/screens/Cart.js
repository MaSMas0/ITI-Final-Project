import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../config/colors';

const Cart = () => {
  const arr = [];
  return (
    <SafeAreaView>
      {arr.length === 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              width: 600,
              flexDirection: 'column',
              position: 'absolute',
              top: 50,
              left: 75,
              color: colors.white,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/5435/5435052.png',
                width: 250,
                height: 250,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                left: -168,
                top: 17,
              }}>
              <Text
                style={{
                  color: colors.blue,
                  fontSize: 26,
                  fontWeight: 'bold',
                  marginBottom: 12,
                }}>
                Oops!
              </Text>
              <Text
                style={{
                  color: '#9e9e9e',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginBottom: 6,
                }}>
                Your Cart is
                <Text style={{color: colors.blue}}> Empty</Text>
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 25,
                }}>
                Add item to get started
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.blue,
                  width: 200,
                  height: 47,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  GO TO STORE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <ScrollView>
          <View
            style={{
              paddingVertical: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                //   padding: 10,
                borderWidth: 1,
                borderColor: '#eeeeee',
                marginBottom: 20,
                borderRadius: 40,
                shadowColor: '#52006A',
                elevation: 20,
                width: 370,
              }}>
              <View>
                <Image
                  source={{
                    uri: 'https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg?w=2000',
                  }}
                  style={{
                    width: 140,
                    height: 150,
                    marginHorizontal: 8,
                    borderBottomLeftRadius: 40,
                    borderTopLeftRadius: 40,
                    position: 'relative',
                    left: -8.4,
                  }}
                />
              </View>
              <View style={{flexShrink: 1, paddingTop: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 21}}>
                  Product Nike
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#e0e0e0',
                    }}>
                    Qty:1
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginLeft: 80,
                    }}>
                    <Button title="+" color="#ffcc00" style={{}}></Button>
                    <View style={{marginHorizontal: 5}}></View>
                    <Button title="-" color="#F32013"></Button>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#e0e0e0',
                    }}>
                    Price
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    250$
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: '#e0e0e0',
                paddingVertical: 30,
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 350,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                Total:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                250$
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 60,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffcc00',
                justifyContent: 'center',
                alignItems: 'center',
                width: 320,
                height: 47,
                borderRadius: 30,
                color: colors.black,
                shadowColor: '#52006A',
                elevation: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                CHECK OUT
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Cart;
