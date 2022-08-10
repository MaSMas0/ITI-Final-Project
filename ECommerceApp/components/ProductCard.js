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

const width = Dimensions.get('window').width / 2 - 15;

const Card = ({product, onPress}) => {
  const [check, setcheck] = useState(true);

  function handelCheck() {
    setcheck(!check);
  }
  console.log(product);
  const addToCartHandler = () => {
    navigation.navigate('Cart', product);
  };
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
        {}
        <SecondryButton
          onPress={() => handelCheck()}
          title={check ? 'ADD TO CART' : 'REMOVE FROM CART'}
          // colors.mediumBlue
          colors={check ? colors.blue : 'red'}
          // color1={check ? 'red' : 'grey'}
        />
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
