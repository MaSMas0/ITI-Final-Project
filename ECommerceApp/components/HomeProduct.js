import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import colors from '../config/colors';

import Like from './Like';

const HomeProduct = () => {
  return (
    <View
      style={{
        height: '31%',
        width: '40%',
        backgroundColor: colors.grey,
        borderRadius: 10,
        marginRight: 230,
      }}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={{margin: 10}}>
          <Text
            style={{
              backgroundColor: colors.white,
              borderRadius: 20,
              width: 70,
              justifyContent: 'center',
              textAlign: 'center',
              color: colors.black,
              fontWeight: 'bold',
            }}>
            30% OFF
          </Text>
        </View>
        <View style={{margin: 10}}>
          <Like />
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/I/61IJBsHm97L._SL1500_.jpg',
          }}
          style={{width: 70, height: 70}}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 5,
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Text>Apple Watch - M2</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                color: colors.black,
                fontWeight: 'bold',
                paddingHorizontal: 20,
                fontSize: 15,
              }}>
              $140
            </Text>
            <Text
              style={{
                textDecorationLine: 'line-through',
                color: colors.medium,
              }}>
              $200
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeProduct;
