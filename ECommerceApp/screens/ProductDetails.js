import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux/';
import ReadMore from 'react-native-read-more-text';
import {addToCart, removeFromCart} from '../actions/CartActions';
import SecondryButton from '../components/SecondryButton';

const ProductDetails = ({route, navigation}) => {
  const {item} = route.params;
  const cartItems = useSelector(state => state.cart.cartItems);
  const ProductInCart =
    cartItems.length !== 0
      ? cartItems.filter(product => product.product == item._id)[0]
      : null;
  let quantity =
    cartItems.length !== 0
      ? cartItems.filter(product => product.product == item._id)[0].qty
      : 1;
  const countInStock =
    cartItems.length !== 0
      ? cartItems.filter(product => product.product == item._id)[0].countInStock
      : 0;
  const handleIncrement = () => {
    if (quantity < countInStock) {
      quantity++;
      dispatch(addToCart(item._id, quantity));
    }
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      quantity--;
      dispatch(addToCart(item._id, quantity));
    }
  };
  const addToCartHandler = () => {
    dispatch(addToCart(item._id, 1));
  };
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(item._id));
  };

  const dispatch = useDispatch();

  return (
    <ScrollView style={style.pageBgColor}>
      <SafeAreaView style={style.saveAreaStyle}>
        <View style={style.header}></View>
        <View style={style.imageContainer}>
          <Image
            style={style.imgStyle}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={style.subCont}>
          <Text numberOfLines={2} style={style.title}>
            {item.name}
          </Text>
        </View>
        <Text style={style.priceText}>{item.price} $</Text>
        <Rating
          readonly
          startingValue={item.rating}
          imageSize={20}
          style={{paddingVertical: 10}}
        />
        <View style={style.Container}>
          {/* <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            colors={['#030A4E', '#22336a']}
            style={style.priceContainer}></LinearGradient> */}
          <View style={style.descriptionContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              About
            </Text>
            <ReadMore numberOfLines={2}>
              <Text style={style.description}>{item.description}</Text>
            </ReadMore>
            <View style={style.downContainer}>
              {ProductInCart && quantity !== 0 ? (
                <View style={style.subDownContainer}>
                  <TouchableOpacity onPress={handleDecrement}>
                    <View style={style.decreContainer}>
                      <Text style={style.decreBtn}>-</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={style.prodNo}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={handleIncrement}
                    disabled={quantity == countInStock}>
                    <LinearGradient
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 0}}
                      colors={['#030A4E', '#22336a']}
                      style={style.increContainer}>
                      <Text style={style.increBtn}>+</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ) : ProductInCart && quantity == 0 ? (
                <View style={style.subDownContainer}>
                  <SecondryButton
                    onPress={removeFromCartHandler}
                    title="REMOVE FROM CART"
                    colors="red"
                  />
                </View>
              ) : (
                <View style={style.subDownContainer}>
                  <SecondryButton
                    onPress={addToCartHandler}
                    title="ADD TO CART"
                    colors={colors.blue}
                  />
                </View>
              )}
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                  colors={['#030A4E', '#22336a']}
                  style={style.buyBtn}>
                  <Text style={style.buyText}>Add To Cart</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  saveAreaStyle: {
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
  },
  imgStyle: {
    resizeMode: 'contain',
    flex: 1,
    width: 350,
    height: 300,
    borderRadius: 20,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },

  Container: {
    flex: 0.55,
    backgroundColor: 'colors.lightGrey',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 25,
    marginTop: 10,
    paddingTop: 10,
  },
  subCont: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  description: {
    color: colors.medium,
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
  },

  increContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
  },
  increBtn: {fontWeight: 'bold', color: colors.white, fontSize: 22},
  decreContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    backgroundColor: colors.lightGrey,
  },
  decreBtn: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.black,
  },
  prodNo: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 30},
  buyBtn: {
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  buyText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  priceContainer: {
    width: 100,
    height: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 5,
  },
  priceText: {
    marginLeft: 20,
    marginTop: 10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
  },
  downContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subDownContainer: {
    flexDirection: 'row',
  },
  pageBgColor: {backgroundColor: colors.white},
});

export default ProductDetails;
