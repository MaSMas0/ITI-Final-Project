import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';

const width = Dimensions.get('window').width / 2 - 30;

const Card = ({product}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('SingleDetails', product)}>
      <View style={style.card}>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </View>

        <View
          style={{
            height: 100,
            alignItems: 'center',
          }}>
          <Image
            source={{uri: product.image}}
            style={{flex: 1, resizeMode: 'contain', width: 100, height: 100}}
          />
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
          {product.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            ${product.price}
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: colors.green,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 22, color: colors.white, fontWeight: 'bold'}}>
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  search: {
    height: 50,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    backgroundColor: colors.grey,
    borderRadius: 20,
    width: 350,
    paddingLeft: 20,
    marginHorizontal: 10,
  },

  card: {
    height: 225,
    backgroundColor: colors.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default Card;
