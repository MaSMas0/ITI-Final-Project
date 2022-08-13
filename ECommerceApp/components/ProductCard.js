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
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../actions/CartActions';

const width = Dimensions.get('window').width / 2 - 15;

const Card = ({product, onPress}) => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const ProductInCart =
    cartItems.length !== 0
      ? cartItems.filter(selected => selected.product == product._id)[0]
      : null;
  // const addToCartHandler = () => {
  //   dispatch(addToCart(product._id, 1));
  // };
  // const removeFromCartHandler = () => {
  //   dispatch(removeFromCart(product._id));
  // };
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.card}>
        <FreeShipping />
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />
        <Text style={styles.like}>
          <Like product={product} />
        </Text>
        <Text style={styles.name}> {product.name}</Text>
        <View style={styles.info}>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        <Text style={styles.nileExpress}>
          Nile <Text style={styles.expressStyle}>EXPRESS</Text>
        </Text>

        <Text style={{fontSize: 12}}>
          Eligable for <Text style={styles.freeDelvStyle}>Free Delivery</Text>
        </Text>
        {/* {!ProductInCart ? (
          <SecondryButton
            onPress={addToCartHandler}
            title="ADD TO CART"
            colors={colors.blue}
          />
        ) : (
          <SecondryButton
            onPress={removeFromCartHandler}
            style={{
              color: colors.blue,
            }}
            title="REMOVE FROM CART"
            colors={colors.medium}
          />
        )} */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  search: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    height: 350,
    backgroundColor: colors.white,
    width,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  nileExpress: {
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 12,
    color: colors.medium,
  },
  expressStyle: {color: colors.mediumBlue},
  freeDelvStyle: {fontWeight: 'bold', color: colors.black},
  image: {
    width,
    height: 100,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  like: {
    marginLeft: 15,
  },
  name: {
    marginHorizontal: 15,
  },
});

export default Card;
