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
import React, {useEffect, useRef, useState} from 'react';
import {Rating} from 'react-native-ratings';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux/';
import ReadMore from 'react-native-read-more-text';
import {addToCart, removeFromCart} from '../actions/CartActions';
import SecondryButton from '../components/SecondryButton';

const ProductDetails = ({route, navigation}) => {
  const {item} = route.params;
  console.log(route);
  const cartItems = useSelector(state => state.cart.cartItems);
  // if (cartItems) {
  //   console.log(cartItems[0])
  // }
  const [quantity, setQuantity] = useState(0);
  const ProductInCart =
    cartItems.length !== 0
      ? cartItems.filter(ci => ci.product === item._id)[0]
      : null;
  // let quantity =
  // let quantity = 0;
  //   cartItems.length !== 0
  //     ? cartItems.filter(ci => ci.product === item._id)[0].qty
  //     : 1;
  // const useDidMountEffect = (func, deps) => {
  //   const didMount = useRef(false);

  //   useEffect(() => {
  //     if (didMount.current) {
  //       func();
  //     } else {
  //       didMount.current = true;
  //     }
  //   }, deps);
  // };
  // dispatch(addToCart(item._id, quantity));
  const didMount = useRef(false);
  const countInStock = item.countInStock;
  console.log(cartItems);
  console.log(didMount.current);
  console.log(quantity);
  // useEffect(() => {
  //   console.log(cartItems[0].qty);
  //   if (cartItems[0].qty) {
  //     setQuantity(cartItems[0].qty);
  //   }
  // }, []);
  useEffect(() => {
    if (didMount.current) {
      dispatch(addToCart(item._id, quantity));
    } else {
      didMount.current = true;
    }
  }, [dispatch, item._id, quantity]);
  const handleIncrement = () => {
    if (quantity < countInStock) {
      setQuantity(quantity + 1);
      dispatch(addToCart(item._id, quantity));
    }
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(addToCart(item._id, quantity));
    }
  };
  const addToCartHandler = () => {
    // setQuantity(quantity + 1);
    setQuantity(quantity + 1);
    dispatch(addToCart(item._id, quantity));
    // console.log(quantity);
    // dispatch(addToCart(item._id, 1));
  };
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(item._id));
  };
  // console.log(quantity);

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
                  <View style={{flexDirection: 'row'}}>
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

                  <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <LinearGradient
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 0}}
                      colors={['#030A4E', '#22336a']}
                      style={style.buyBtn}>
                      <Text style={style.buyText}>CHECK THE CART</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ) : ProductInCart && quantity == 0 ? (
                <View style={style.buyBtn}>
                  {/* <SecondryButton
                    onPress={removeFromCartHandler}
                    title="REMOVE FROM CART"
                    colors="red"
                    style={{
                      width: 300,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 30,
                    }}
                  /> */}
                  <TouchableOpacity onPress={removeFromCartHandler}>
                    <LinearGradient
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 0}}
                      colors={['#B21807', '#FF4500']}
                      style={style.buyBtn}>
                      <Text style={style.buyText}>REMOVE FROM CART</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={style.buyBtnContainer}>
                  <TouchableOpacity onPress={addToCartHandler}>
                    <LinearGradient
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 0}}
                      colors={['#030A4E', '#22336a']}
                      style={style.buyBtn}>
                      <Text style={style.buyText}>ADD TO CART</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
              {/* <SecondryButton
                    onPress={addToCartHandler}
                    title="ADD TO CART"
                    colors={colors.blue}
                    style={{
                      width: 300,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 30,
                    }}
                  /> */}
            </View>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                colors={['#030A4E', '#22336a']}
                style={style.buyBtn}>
                <Text style={style.buyText}>CHECK THE CART</Text>
              </LinearGradient>
            </TouchableOpacity> */}
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
    // justifyContent:'space-evenly',
    // alignItems:'center'
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
    backgroundColor: '#eee',
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
    marginVertical: 10,
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
    // color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.blue,
  },
  downContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subDownContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    flex: 1,
    marginBottom: 10,
  },
  pageBgColor: {backgroundColor: colors.white},
  buyBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductDetails;
