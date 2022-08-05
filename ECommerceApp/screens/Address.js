import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import SecondryButton from '../components/SecondryButton';

const Address = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          paddingVertical: 25,
          borderRadius: 20,
          paddingHorizontal: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            Country:
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            {' '}
            Egypt
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            Address:
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            {' '}
            Ismailia
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            Phone:
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            {' '}
            01276567619
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'relative',
          top: 350,
          width: 200,
          left: 75,
        }}>
        <SecondryButton title="ADD NEW ADDRESS" />
      </TouchableOpacity>
    </View>
  );
};

export default Address;
