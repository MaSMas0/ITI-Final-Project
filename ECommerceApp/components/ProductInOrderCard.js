import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import {addToCart, removeFromCart} from '../actions/CartActions';
import {useDispatch, useSelector} from 'react-redux';
function ProductInOrderCard({item}) {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartImgContainer}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.CartImgStyle}
        />

        <View style={{flexShrink: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingEnd: 7,
            }}>
            <Text style={styles.prodTitle}>{item.name}</Text>
            {/* <TouchableOpacity onPress={removeFromCartHandler}>
              <FontAwesome name="remove" size={20}></FontAwesome>
            </TouchableOpacity> */}
          </View>
          <View style={styles.CartText1Container}>
            {/* <Text style={styles.qtStyle}>Qty:{quantity}</Text> */}
            {/* <View style={styles.incDeCont}>
              <TouchableOpacity onPress={handleIncrement}>
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                  colors={['#030A4E', '#22336a']}
                  style={styles.increSubContainer}>
                  <Text style={styles.increBtn}>+</Text>
                </LinearGradient>
              </TouchableOpacity>
              <View style={{marginHorizontal: 10}}></View>
              <View style={styles.decreSubContainer}>
                <TouchableOpacity onPress={handleDecrement}>
                  <Text style={styles.decreBtn}>-</Text>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              {item.qty} X {item.price}
            </Text>
            <Text style={styles.priceStyle}>
              = ${(item.price * item.qty).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 600,
    flexDirection: 'column',
    position: 'absolute',
    top: 50,
    left: 75,
    color: colors.white,
  },
  imgStyle: {
    width: 250,
    height: 250,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: -168,
    top: 17,
  },
  text1Style: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text2Style: {
    color: colors.medium,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  addItemStyle: {
    color: colors.medium,
    fontSize: 16,

    marginBottom: 25,
  },
  emptyCartBtn: {
    backgroundColor: colors.blue,
    width: 200,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  cartBtnStyle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  increSubContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
  },
  increBtn: {fontWeight: 'bold', color: colors.white, fontSize: 22},
  decreSubContainer: {
    borderRadius: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 35,
    height: 35,
    backgroundColor: '#eee',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  decreBtn: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.black,
    width: 35,
    height: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  checkOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 320,
    height: 47,
  },
  checkOut: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  prodTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.lightBlue,
  },
  cartContainer: {
    paddingVertical: 15,
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartImgContainer: {
    flexDirection: 'row',
    padding: 8,
    width: 370,
  },
  CartImgStyle: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  CartText1Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  qtStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.medium,
  },
  incDeCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 120,
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 7,
  },
  priceText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.medium,
  },
  priceStyle: {fontSize: 18, fontWeight: 'bold', color: colors.lightBlue},
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 270,
  },
  summeryStyle: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 10,
  },
  subSecContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
  },
  greyText: {
    fontSize: 18,
    color: colors.medium,
    fontWeight: 'bold',
  },
  blueText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
});

export default ProductInOrderCard;
