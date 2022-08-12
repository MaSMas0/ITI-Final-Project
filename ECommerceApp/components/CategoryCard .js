import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';
import SecondryButton from './SecondryButton';
import FreeShipping from './FreeShipping';
import Like from './Like';
import {Rating} from 'react-native-ratings';
const width = Dimensions.get('window').width / 3 - 15;

const CatogeryCard = ({product, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />

        <Text numberOfLines={2} style={styles.name}>
          {product.name}
        </Text>
        <Rating
          readonly
          startingValue={product.rating}
          imageSize={15}
          style={{paddingVertical: 5}}
        />
        <View style={styles.info}>
          <Text style={styles.like}>
            <Like product={product} size={22} />
          </Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
    backgroundColor: colors.white,
    width,
    margin: 5,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 3,
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },

  image: {
    width,
    height: 80,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  like: {
    marginLeft: 5,
  },
  name: {
    marginHorizontal: 0,
  },
});

export default CatogeryCard;
